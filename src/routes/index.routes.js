// Import required modules
const express = require('express');
const router = express.Router();

// Import all routes
const authRoutes = require('./auth.routes');
const bookingRoutes = require('./booking.routes');
const productRoutes = require('./product.routes');
const blogRoutes = require('./blog.routes');
const paymentRoutes = require('./payment.routes');

// Use routes with respective prefixes
router.use('/auth', authRoutes);
router.use('/booking', bookingRoutes);
router.use('/products', productRoutes);
router.use('/blogs', blogRoutes);
router.use('/payment', paymentRoutes);

module.exports = router; // Export the main router
