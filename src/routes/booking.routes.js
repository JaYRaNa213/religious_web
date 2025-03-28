// Import required modules
import express from 'express';
import {
  bookPooja,
  getBookingHistory,
  cancelBooking,
} from '../controllers/booking.controller.js';

const router = express.Router();

// Define routes for booking functionality
/**
 * @route POST /api/booking/book-pooja
 * @description Book a pooja
 */
router.post('/book-pooja', bookPooja);

/**
 * @route GET /api/booking/history
 * @description Get booking history
 */
router.get('/history', getBookingHistory);

/**
 * @route DELETE /api/booking/cancel/:id
 * @description Cancel a booking
 */
router.delete('/cancel/:id', cancelBooking);

export default router; // Export the router
