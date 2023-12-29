import React from "react";

import "./IntroService.css";

function IntroServices({ title, p1, p2, link }) {
  return (
    <div className="intro_services">
      <div className="intro_services_container">
        <h1>{title}</h1>

        <p>{p1}</p>
        <p>{p2}</p>
      </div>
    </div>
  );
}

export default IntroServices;
