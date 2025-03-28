// Import models and required packages
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// User registration service
/**
 * @param {Object} userData - Data for the new user
 * @returns {Object} - Created user details
 */
const registerUser = async (userData) => {
  // Hash the user's password
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  userData.password = hashedPassword;

  // Create a new user in the database
  const newUser = await User.create(userData);
  return newUser;
};

// User login service
/**
 * @param {String} email - User's email
 * @param {String} password - User's password
 * @returns {String} - JWT token if credentials are valid
 */
const loginUser = async (email, password) => {
  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Compare provided password with stored hash
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d', // Token expires in 1 day
  });

  return token;
};

// User logout service (optional)
/**
 * @returns {String} - Confirmation message
 */
const logoutUser = async () => {
  return 'User logged out successfully!';
};

// Export all authentication services
export { registerUser, loginUser, logoutUser };
