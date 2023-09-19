const express = require('express');
const app = express();
const port = 8000; // Set your desired port
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
const nodemailer = require('nodemailer');
// Enable CORS for all routes
app.use(cors({origin: process.env.ENVIRONMENT === "LOCAL" ? "http://localhost:3000" : [API_URL, API_URL_WWW]}));


// Create a transporter using Gmail SMTP
  // TODO: Environment variables for email credentials
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BOOKING_REQUEST_SENDER_EMAIL,
    pass: process.env.BOOKING_REQUEST_SENDER_PASSWORD,
  },
});

// Define a sample route
app.post('/api/send-email', cors(), (req, res) => {
    const { name, phoneNumber, date, time, message } = req.body;

  // Email content
  const mailOptions = {
    from: process.env.BOOKING_REQUEST_SENDER_EMAIL,
    to: 'georgboehm@outlook.com', // Replace with your recipient's email address
    subject: 'New Booking Request',
    text: `
      Name: ${name}
      Phone number: ${phoneNumber}
      Date: ${date}
      Time: ${time}
      Message: ${message}
    `,
  };

	console.log("mail options: ", mailOptions)
	console.log("transporter: ", transporter)
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
	console.log("sending email now!")
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
