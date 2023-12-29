import React from "react";

import "./Booking.css";
import Button from "../Button/Button";

function IntroServices({ service, link }) {
  return (
    <div className="intro_booking">
      <div className="intro_booking_container">
        <h1>How can I start {service} sessions?</h1>
        <p>
          To book a {service} session click the link below to find a time that
          works best for you. We look forward to helping you achieve holistic
          well-being and a renewed sense of relaxation through the power of{" "}
          {service}.
        </p>
        <a href="https://bodyworkbystephanie.noterro.com/">
          <Button to={link}>Click me!</Button>
        </a>
      </div>
    </div>
  );
}

export default IntroServices;
