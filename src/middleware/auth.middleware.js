// Import JWT to verify the token
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
exports.verifyToken = (req, res, next) => {
  // Get token from headers
  const token = req.headers['authorization'];

  // Check if token is provided
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  try {
    // Verify the token using the JWT secret key
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);

    // Attach the decoded user ID to the request object
    req.userId = decoded.id;

    // Move to the next middleware or route
    next();
  } catch (error) {
    // Handle invalid token errors
    res.status(401).json({ message: 'Unauthorized! Invalid token.' });
  }
};
