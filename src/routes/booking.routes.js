import express from 'express';
import { createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking } from '../controllers/booking.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

// Create Booking
router.post('/', authMiddleware, createBooking);

// Get All Bookings
router.get('/', authMiddleware, getAllBookings);

// Get Single Booking
router.get('/:id', authMiddleware, getBookingById);

// Update Booking
router.put('/:id', authMiddleware, updateBooking);

// Delete Booking
router.delete('/:id', authMiddleware, deleteBooking);

export default router;
