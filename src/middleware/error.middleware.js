// Middleware to handle 404 errors
exports.notFound = (req, res, next) => {
  res.status(404).json({ message: 'Resource not found!' });
};

// Middleware to handle global errors
exports.errorHandler = (err, req, res, next) => {
  // Set default error status and message
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message = err.message || 'Internal Server Error';

  // Log the error for debugging
  console.error(err.stack);

  // Send error response to the client
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : null,
  });
};
