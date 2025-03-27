// Import required modules
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');

// Define routes for booking functionality
// @route POST /api/booking/book-pooja - Book a pooja
router.post('/book-pooja', bookingController.bookPooja);

// @route GET /api/booking/history - Get booking history
router.get('/history', bookingController.getBookingHistory);

// @route DELETE /api/booking/cancel/:id - Cancel a booking
router.delete('/cancel/:id', bookingController.cancelBooking);

module.exports = router; // Export the router
