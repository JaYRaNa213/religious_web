// Import required modules
import http from 'http';
import dotenv from 'dotenv';
import app from './app.js'; // Import Express app from app.js

// Load environment variables from .env file
dotenv.config();

// Define the port to run the server (default: 7000 if not specified in .env)
const PORT = process.env.PORT || 7000;

// Create an HTTP server using Express app
const server = http.createServer(app);

// Start the server and listen on the defined port
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections and log the error
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1)); // Gracefully exit process on error
});

// Gracefully handle termination signals (e.g., Ctrl+C)
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Process terminated!');
  });
});
