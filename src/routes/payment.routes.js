// // payment.routes.js

// // Import required modules
// import express from 'express';
// import { initiatePayment, getPaymentStatus, handleWebhook } from '../controllers/payment.controller.js';

// const router = express.Router();

// // Define routes for payment functionality
// /**
//  * @route POST /api/payment/initiate
//  * @description Initiate payment
//  */
// router.post('/initiate', initiatePayment);

// /**
//  * @route GET /api/payment/status/:id
//  * @description Get payment status
//  */
// router.get('/status/:id', getPaymentStatus);

// /**
//  * @route POST /api/payment/webhook
//  * @description Handle payment webhook
//  */
// router.post('/webhook', handleWebhook);

// export default router; // Export the router

// Import required modules
import express from 'express';
import { processPayment, getUserPayments } from '../controllers/payment.controller.js';

const router = express.Router();

// Define routes for payment functionality
/**
 * @route POST /api/payments/process
 * @description Process payment
 */
router.post('/process', processPayment);

/**
 * @route GET /api/payments/user/:userId
 * @description Get all payments for a user
 */
router.get('/user/:userId', getUserPayments);

export default router; // Export the router
