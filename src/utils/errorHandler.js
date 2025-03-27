// Error handling middleware
// @param {Object} err - Error object
// @param {Object} req - Request object
// @param {Object} res - Response object
// @param {Function} next - Next middleware function
const errorHandler = (err, req, res, next) => {
  // Set the status code to 500 if not defined
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  // Send error response with message and stack trace (optional)
  res.status(statusCode).json({
      message: err.message,
      // Only include stack trace in development mode
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = errorHandler;
