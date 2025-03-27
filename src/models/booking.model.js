// Import mongoose to define the schema and model
const mongoose = require('mongoose');

// Define the Booking schema
const bookingSchema = new mongoose.Schema({
  // Reference to the user who made the booking
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // Reference to the pandit or service booked
  service: {
    type: String,
    required: true,
  },
  // Date and time of the booking
  bookingDate: {
    type: Date,
    required: true,
  },
  // Status of the booking (default is 'pending')
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },
  // Additional details for the booking
  additionalInfo: {
    type: String,
  },
});

// Create and export the Booking model
module.exports = mongoose.model('Booking', bookingSchema);
