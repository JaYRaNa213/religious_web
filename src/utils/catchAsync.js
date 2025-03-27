// Utility to catch errors in async functions
// @param {Function} fn - Asynchronous route handler
// @returns {Function} - Error-handling wrapper
const catchAsync = (fn) => {
  return (req, res, next) => {
      fn(req, res, next).catch((err) => next(err));
  };
};

module.exports = catchAsync;
