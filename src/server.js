// Import necessary modules
const http = require('http');
const app = require('./app'); // Import the Express app from app.js
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Define the port to run the server (default: 5000 if not specified in .env)
const PORT = process.env.PORT || 5000;

// Create an HTTP server using Express app
const server = http.createServer(app);

// Start the server and listen on the defined port
server.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections and log the error
process.on('unhandledRejection', (err, promise) => {
    console.log(`❌ Error: ${err.message}`);
    server.close(() => process.exit(1)); // Gracefully exit process on error
});

// Gracefully handle termination signals (e.g., Ctrl+C)
process.on('SIGTERM', () => {
    console.log('⚠️ SIGTERM received. Shutting down gracefully...');
    server.close(() => {
        console.log('💡 Process terminated!');
    });
});
