// Import the Payment and User models
const Payment = require('../models/payment.model');
const User = require('../models/user.model');

// Process a new payment
exports.processPayment = async (req, res) => {
  try {
    // Destructure payment details from request body
    const { userId, amount, paymentMethod } = req.body;

    // Create a new payment record
    const payment = new Payment({
      user: userId,
      amount,
      paymentMethod,
      status: 'success',
    });

    // Save payment to the database
    await payment.save();
    res.status(201).json({ message: 'Payment processed successfully', payment });
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment', error });
  }
};

// Get all payments for a user
exports.getUserPayments = async (req, res) => {
  try {
    // Get user ID from request params
    const userId = req.params.userId;

    // Find all payments by the user
    const payments = await Payment.find({ user: userId }).populate('user');
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payments', error });
  }
};
