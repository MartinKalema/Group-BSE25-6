const express = require('express');
const { register, login, getAllUsers } = require('../controllers/authController'); 

const router = express.Router();

// Public routes
router.post('/register', register);  // Route for user registration
router.post('/login', login);        // Route for user login

// Public route to retrieve all users (no authentication)
router.get('/users', getAllUsers);   // Route to get all users without session protection

// Example of an unprotected route
router.get('/protected', (req, res) => {
  res.json({ message: 'No session check, route is accessible by anyone!' });
});

module.exports = router;
