// Import necessary package
const nodemailer = require('nodemailer');

// Function to send an email
// @param {Object} options - Contains email data (to, subject, text, html)
// @returns {Object} - Email info or error
const sendEmail = async (options) => {
    // Configure the transporter using SMTP
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Using Gmail as the mail service
        auth: {
            user: process.env.EMAIL_USER, // Sender email address from .env
            pass: process.env.EMAIL_PASS, // Sender email password from .env
        },
    });

    // Define email options
    const mailOptions = {
        from: `"Religious Website" <${process.env.EMAIL_USER}>`, // Sender name and email
        to: options.to, // Recipient email address
        subject: options.subject, // Email subject
        text: options.text, // Plain text content
        html: options.html, // HTML formatted content (optional)
    };

    // Send email and return info or error
    const info = await transporter.sendMail(mailOptions);
    return info;
};

// Export the function for use in other parts of the application
module.exports = sendEmail;
