import React from "react";

import "./Footer.css";
import logo from "./images/logo.png";
import location from "./images/location.png";
import mail from "./images/mail.png";
import phone from "./images/smartphone.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <img src={logo} alt="linework of a lotus flower" />
        <div className="contact_info">
          <h3>Bodywork by Stephanie</h3>
          <div className="call">
            <img
              src={phone}
              alt="a smartphone that looks like an iphone"
              id="phone"
            />
            <p>617-513-5455</p>
          </div>
          <div className="email">
            <img src={mail} alt="piece of snail mail" id="mail" />
            <p>smarenna@gmail.com</p>
          </div>
          <div className="location">
            <img src={location} alt="map your are here" id="location" />
            <p>262 Beacon Street, floor 4</p>
          </div>
          <p>Boston, MA 02116</p>
        </div>

        <div className="design_info">
          <p>
            UX Design by John Kelley | Website Built by {""}{" "}
            <a id="design_link" href="https://bethjmdev.netlify.app/">
              BethCodes
            </a>{" "}
            | Find the repo {""}
            <a id="design_link" href="https://github.com/bethjm/stephmassage">
              here
            </a>
          </p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Footer;
