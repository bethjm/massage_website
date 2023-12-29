import React from "react";
import "./Services.css";

import yoga from "../images/yoga-service.jpeg";
import massage from "../images/massage2.jpg";
import reiki from "../images/reiki.jpeg";
import { Link } from "react-router-dom";
import TinyButton from "../UI/Button/TinyButton";

function Services() {
  return (
    <div className="services">
      <h2>Services</h2>

      <div className="service_box_container">
        <div className="service_box">
          <img src={massage} />
          <h3>Massage</h3>
          <TinyButton id="tiny_button">LEARN MORE</TinyButton>
        </div>
        <div className="service_box">
          <img src={yoga} />
          <h3>Yoga</h3>
          <TinyButton id="tiny_button">LEARN MORE</TinyButton>
        </div>
        <div className="service_box">
          <img src={reiki} />
          <h3>Reiki</h3>
          <TinyButton id="tiny_button">LEARN MORE</TinyButton>
        </div>
      </div>
    </div>
  );
}

export default Services;
