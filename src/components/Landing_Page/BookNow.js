import React from "react";

import Button from "../UI/Button/Button";

import "./BookNow.css";

function BookNow() {
  return (
    <div className="booknow">
      <div className="booknow_container">
        <a href="https://bodyworkbystephanie.noterro.com/">
          <Button>BOOK NOW</Button>
        </a>
      </div>
    </div>
  );
}

export default BookNow;
