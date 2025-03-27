// Import required packages and modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

// Import route files
const authRoutes = require('./src/routes/auth.routes');
const bookingRoutes = require('./src/routes/booking.routes');
const productRoutes = require('./src/routes/product.routes');
const blogRoutes = require('./src/routes/blog.routes');
const paymentRoutes = require('./src/routes/payment.routes');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS to allow requests from different origins
app.use(cors());

// Middleware to log HTTP requests for easier debugging
app.use(morgan('dev'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define base routes for API endpoints
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/products', productRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/payments', paymentRoutes);

// Home route to test the API
app.get('/', (req, res) => {
    res.send('Welcome to the Religious Website API!');
});

// Handle 404 errors (resource not found)
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found!',
    });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log error to console
    res.status(500).json({
        success: false,
        message: 'Something went wrong! Please try again later.',
    });
});

// Define the server port using environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server and listen for requests
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
