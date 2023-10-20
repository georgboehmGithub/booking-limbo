const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
const nodemailer = require("nodemailer");

// Enable CORS for particular routes only
app.use(
  cors({
    origin:
      process.env.ENVIRONMENT === "LOCAL"
        ? "http://localhost:3000"
        : [process.env.API_URL, process.env.API_URL_WWW],
  })
);

// Create a transporter using Gmail SMTP
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
app.post("/api/send-email", cors(), (req, res) => {
  const { name, phoneNumber, date, time, message } = req.body;

  // Email content
  const mailOptions = {
    from: process.env.BOOKING_REQUEST_SENDER_EMAIL,
    to: process.env.BOOKING_RECIPIENT_EMAIL,
    subject: "New Booking Request",
    text: `
      Name: ${name}
      Phone number: ${phoneNumber}
      Date: ${date}
      Time: ${time}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json({ message: "Error sending email" });
    } else {
      res.json({ message: "Email sent successfully" });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
