import React from "react";

const ContactDetails = () => {
  // Dummy contact details
  const contactInfo = [
    "Email: general.booking.limbo@gmail.com",
    "Social Media: @city.limbo",
  ];

  return (
    <ul>
      {contactInfo.map((info, index) => (
        <li key={index}>{info}</li>
      ))}
    </ul>
  );
};

export default ContactDetails;
