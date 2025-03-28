// src/server.js
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse incoming requests
app.use(express.json());

// Use authentication routes
app.use('/api/auth', authRoutes);

// Define a basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Religious Website API!');
});

// Start the server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`✅ Server is ready and running on port ${PORT}`);
  console.log(`📚 Visit: http://localhost:${PORT}`);
  console.log(`✅ Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);

});
