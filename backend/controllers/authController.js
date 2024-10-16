const { registerUser, loginUser, fetchAllUsers } = require('../services/userService');

// Register controller
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await registerUser(name, email, password);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'User already exists' });
    } else {
      res.status(500).json({ error: 'An error occurred' });
    }
  }
};

// Login controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { isValid, user } = await loginUser(email, password);

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(404).json({ error: 'User not found' });
  }
};

// Retrieve all users controller
const getAllUsers = async (req, res) => {
  try {
    const users = await fetchAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};

module.exports = { register, login, getAllUsers };
