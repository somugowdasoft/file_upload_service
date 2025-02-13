// server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const fileRoutes = require('./routes/fileRoutes');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', fileRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
