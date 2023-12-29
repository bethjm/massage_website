import React from "react";

import "./LandingHeader.css";
import Button from "../UI/Button/Button";
import massageRoom from "../images/MassageRoom.png";
import cloudBackground from "../images/headerimage.jpeg";

function LandingHeader() {
  return (
    <div className="landing_header">
      <img
        src={cloudBackground}
        alt="Pretty purple and blue clouds"
        className="clouds"
      />
      <img
        src={massageRoom}
        className="massage_room"
        alt="Steph's massage room"
      />

      <div className="landing_header_container">
        <div className="header_content">
          <h1>Unwind & find peace</h1>
          <h3>
            Embark on a transformative journey of self-discovery and holistic
            wellness.
          </h3>
          <a href="https://bodyworkbystephanie.noterro.com/">
            <Button id="button_landingpage">BOOK NOW</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingHeader;
