// Middleware to check user role for authorization
exports.checkRole = (roles) => {
  return (req, res, next) => {
    // Check if user has the required role
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied. Insufficient permissions!' });
    }

    // Move to the next middleware or route
    next();
  };
};
