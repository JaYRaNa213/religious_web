// Import payment gateway package (example: Stripe)
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Function to create a payment intent
// @param {Number} amount - Amount to be charged in smallest currency unit (e.g., paisa or cents)
// @param {String} currency - Currency for the payment (e.g., INR, USD)
// @param {String} customerEmail - Email address of the customer
// @returns {Object} - Payment intent object or error
const createPaymentIntent = async (amount, currency, customerEmail) => {
    try {
        // Create a payment intent using Stripe API
        const paymentIntent = await stripe.paymentIntents.create({
            amount, // Amount in smallest unit
            currency, // Currency type
            receipt_email: customerEmail, // Email for receipt
            description: 'Religious Service Payment', // Payment description
        });

        // Return the payment intent
        return paymentIntent;
    } catch (error) {
        // Throw error if something goes wrong
        throw new Error(`Payment creation failed: ${error.message}`);
    }
};

// Function to verify payment
// @param {String} paymentId - ID of the payment to be verified
// @returns {Object} - Payment verification result
const verifyPayment = async (paymentId) => {
    try {
        // Retrieve payment intent from Stripe
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentId);

        // Check payment status
        if (paymentIntent.status === 'succeeded') {
            return { success: true, message: 'Payment successful' };
        } else {
            return { success: false, message: 'Payment failed or pending' };
        }
    } catch (error) {
        // Handle any errors during verification
        throw new Error(`Payment verification failed: ${error.message}`);
    }
};

// Export payment functions
module.exports = {
    createPaymentIntent,
    verifyPayment,
};
