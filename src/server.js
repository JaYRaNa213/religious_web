import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import bookingRoutes from './routes/booking.routes.js';
import productRoutes from './routes/product.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import blogRoutes from './routes/blog.routes.js';
import emailRoutes from './routes/email.routes.js';
// src/server.js

dotenv.config();


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();

// Middleware to parse incoming requests
app.use(express.json());

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/products', productRoutes);

app.use('/api/payments', paymentRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/emails', emailRoutes);
app.use('/api/auth', authRoutes);
// Define a basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Religious Website API!');
});

// Start the server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log("connected to the database");
  console.log("Press Ctrl+C to stop");
});
