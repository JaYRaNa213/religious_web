// Middleware to handle 404 errors
export const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found!',
  });
};

// Middleware to handle global errors
import ApiError from '../utils/ApiError.js';

// Global error handler middleware
export const errorHandler = (err, req, res, next) => {
  // Set default status and message
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // Check if the error is an instance of ApiError
  if (err instanceof ApiError) {
    return res.status(statusCode).json({
      success: false,
      message,
      errors: err.errors || [], // Send additional error details if available
    });
  }

  // Log error details for debugging (only in development mode)
  console.error(err.stack);

  // Send generic error response
  res.status(statusCode).json({
    success: false,
    message,
    errors: err.errors || [],
    stack: process.env.NODE_ENV === 'development' ? err.stack : null,
  });
};
