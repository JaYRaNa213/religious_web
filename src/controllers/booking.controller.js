// booking.controller.js
import { bookPooja, getBookingHistory, cancelBooking } from '../services/booking.service.js';

/**
 * @description Controller to book a pooja
 */
export const createBooking = async (req, res) => {
  try {
    const booking = await bookPooja(req.body);
    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**
 * @description Controller to get booking history
 */
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await getBookingHistory(req.params.userId);
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @description Controller to cancel a booking
 */
export const removeBooking = async (req, res) => {
  try {
    const message = await cancelBooking(req.params.bookingId);
    res.status(200).json({ success: true, message });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
