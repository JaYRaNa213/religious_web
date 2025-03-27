// Import multer for file uploads
const multer = require('multer');
const path = require('path');

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Set destination folder for uploads
  },
  filename: (req, file, cb) => {
    // Create unique file name using current date and original name
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Define file upload limits and types
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Max 5MB
  fileFilter: (req, file, cb) => {
    // Validate file types (only images allowed)
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed!'));
    }
  },
});

// Middleware to handle single file upload
exports.uploadSingle = (fieldName) => upload.single(fieldName);

// Middleware to handle multiple file uploads
exports.uploadMultiple = (fieldName, maxCount) => upload.array(fieldName, maxCount);
