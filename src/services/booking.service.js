// Import models
const Booking = require('../models/booking.model');

// Service to book a pooja
// @param {Object} bookingData - Booking details
// @returns {Object} - Created booking
const bookPooja = async (bookingData) => {
    const newBooking = await Booking.create(bookingData);
    return newBooking;
};

// Service to get all bookings for a user
// @param {String} userId - User ID
// @returns {Array} - List of bookings
const getBookingHistory = async (userId) => {
    const bookings = await Booking.find({ userId });
    return bookings;
};

// Service to cancel a booking
// @param {String} bookingId - Booking ID
// @returns {String} - Confirmation message
const cancelBooking = async (bookingId) => {
    await Booking.findByIdAndDelete(bookingId);
    return 'Booking canceled successfully!';
};

module.exports = {
    bookPooja,
    getBookingHistory,
    cancelBooking,
};
