// Import mongoose to define the schema and model
const mongoose = require('mongoose');

// Define the Payment schema
const paymentSchema = new mongoose.Schema({
  // Reference to the user who made the payment
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // Amount paid by the user
  amount: {
    type: Number,
    required: true,
  },
  // Payment method (e.g., credit card, UPI, etc.)
  paymentMethod: {
    type: String,
    required: true,
  },
  // Status of the payment (success, pending, failed)
  status: {
    type: String,
    enum: ['success', 'pending', 'failed'],
    default: 'pending',
  },
  // Date and time of the payment
  paymentDate: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Payment model
module.exports = mongoose.model('Payment', paymentSchema);
