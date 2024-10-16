const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// Configure session management
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Use the authentication routes
app.use('/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
