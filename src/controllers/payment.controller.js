// payment.controller.js

// Import the Payment and User models
import Payment from '../models/payment.model.js';
import User from '../models/user.model.js';

/**
 * @description Process a new payment
 * @route POST /api/payments/process
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const processPayment = async (req, res) => {
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
    res.status(201).json({
      success: true,
      message: 'Payment processed successfully',
      payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error processing payment',
      error: error.message,
    });
  }
};

/**
 * @description Get all payments for a user
 * @route GET /api/payments/user/:userId
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const getUserPayments = async (req, res) => {
  try {
    // Get user ID from request params
    const { userId } = req.params;

    // Find all payments by the user
    const payments = await Payment.find({ user: userId }).populate('user');

    res.status(200).json({
      success: true,
      payments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching payments',
      error: error.message,
    });
  }
};
