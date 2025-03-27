// Import required packages
const nodemailer = require('nodemailer');

// Send email utility
// @param {Object} options - Email options (to, subject, text)
// @returns {Object} - Email response
const sendEmail = async (options) => {
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER, // Sender email
            pass: process.env.EMAIL_PASS, // Email password
        },
    });

    // Define email options
    const mailOptions = {
        from: `"Religious Website" <${process.env.EMAIL_USER}>`,
        to: options.to, // Recipient email
        subject: options.subject, // Email subject
        text: options.text, // Email content (plain text)
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    return info;
};

module.exports = sendEmail;
