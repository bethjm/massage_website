import React from "react";

import "./AboutHeader.css";
import Button from "../UI/Button/Button";

function AboutHeader() {
  return (
    <div className="about_header_page">
      <div className="about_header_container">
        <h1>Meet Stephanie</h1>
        <a href="https://bodyworkbystephanie.noterro.com/">
          <Button>BOOK NOW</Button>
        </a>
      </div>
    </div>
  );
}

export default AboutHeader;
