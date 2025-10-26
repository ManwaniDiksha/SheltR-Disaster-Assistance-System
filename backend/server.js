const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const authMiddleware = require('./authMiddleware');
const User = require('./models/User'); // import User model
const authRoutes = require('./auth'); // import auth routes

// Use built-in fetch if available, fallback to node-fetch
let fetchFn;
try {
  fetchFn = global.fetch || require('node-fetch');
} catch (e) {
  fetchFn = global.fetch;
}

const app = express();
const PORT = process.env.PORT || 3000;

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json()); // parse JSON bodies
app.use(express.static(path.join(__dirname, '..'))); // serve frontend files

// --- DATABASE CONNECTION ---
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// --- ROUTES ---
// Authentication routes
app.use('/api/auth', authRoutes);

// Recent disasters route
app.get('/api/recent', async (req, res) => {
  try {
    const apiUrl = "https://api.reliefweb.int/v1/disasters?limit=10&sort[]=date:desc&fields[include][]=name&fields[include][]=country&fields[include][]=date&appname=SheltR";

    const response = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'SheltR/1.0 (contact: test@example.com)',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('[server] ReliefWeb error:', response.status, text);
      return res.status(response.status).json({
        error: 'Upstream API error',
        details: text
      });
    }

    const data = await response.json();
    res.json(data);

  } catch (err) {
    console.error('[server] Fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch disasters' });
  }
});

// Protected profile route
app.get('/api/profile', authMiddleware, async (req, res) => {
  try {
    // req.user is set by authMiddleware
    const user = await User.findById(req.user.id).select('-password'); // exclude password
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// --- START SERVER ---
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running at http://0.0.0.0:${PORT}`);
});
