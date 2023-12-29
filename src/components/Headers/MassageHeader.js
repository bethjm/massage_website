import React from "react";

import "./MassageHeader.css";
import Button from "../UI/Button/Button";

function MassageHeader() {
  return (
    <div className="massage_header_page">
      <div className="massage_header_container">
        <h1>Massage</h1>
        <Button className="button_massage">BOOK NOW</Button>
      </div>
    </div>
  );
}

export default MassageHeader;
