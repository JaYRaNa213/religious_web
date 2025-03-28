// src/services/auth.service.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Mock database for demo purposes
const users = [];

// Register user logic
export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  // Check if user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Hash password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user and push to mock DB
  const newUser = { id: Date.now(), name, email, password: hashedPassword };
  users.push(newUser);

  return newUser;
};

// Login user logic
export const loginUser = async (email, password) => {
  const user = users.find((user) => user.email === email);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  // Generate JWT token
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return token;
};

// Logout user logic
export const logoutUser = async () => {
  return 'User logged out successfully';
};
