// Import multer package
import multer from 'multer';

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Save uploaded files in the 'public/temp' directory
    cb(null, './public/temp');
  },
  filename: function (req, file, cb) {
    // Save the file with its original name
    cb(null, file.originalname);
  },
});

// Create multer instance with storage configuration
export const upload = multer({ storage });
