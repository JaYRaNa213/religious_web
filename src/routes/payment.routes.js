// Import required modules
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');

// Define routes for payment functionality
// @route POST /api/payment/initiate - Initiate payment
router.post('/initiate', paymentController.initiatePayment);

// @route GET /api/payment/status/:id - Get payment status
router.get('/status/:id', paymentController.getPaymentStatus);

// @route POST /api/payment/webhook - Handle payment webhook
router.post('/webhook', paymentController.handleWebhook);

module.exports = router; // Export the router
