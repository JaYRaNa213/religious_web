// Import the Booking and User models
const Booking = require('../models/booking.model');
const User = require('../models/user.model');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    // Destructure booking details from request body
    const { userId, service, bookingDate, additionalInfo } = req.body;

    // Create a new booking
    const booking = new Booking({
      user: userId,
      service,
      bookingDate,
      additionalInfo,
    });

    // Save booking to the database
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

// Get all bookings for a user
exports.getUserBookings = async (req, res) => {
  try {
    // Get user ID from request params
    const userId = req.params.userId;

    // Find all bookings by the user
    const bookings = await Booking.find({ user: userId }).populate('user');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};
