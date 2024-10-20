require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDB connection
const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://admin:admin@mongodb:27017/clinicdatabase';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    // Check Express.js
    const expressHealth = { status: 'ok' };

    // Check MongoDB
    let mongoHealth;
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.db.admin().ping();
      mongoHealth = { status: 'ok' };
    } else {
      mongoHealth = { status: 'error', message: 'MongoDB not connected' };
    }

    // Determine overall health
    const isHealthy =
      expressHealth.status === 'ok' && mongoHealth.status === 'ok';

    res.status(isHealthy ? 200 : 500).json({
      status: isHealthy ? 'ok' : 'error',
      express: expressHealth,
      mongodb: mongoHealth,
    });
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(500).json({
      status: 'error',
      message: error.message,
      express: { status: 'ok' },
      mongodb: { status: 'error', message: error.message },
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
