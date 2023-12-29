import React from "react";

import "./Approach.css";

import approachImage from "../images/my_approach.jpeg";

function Approach() {
  return (
    <div className="approach">
      <div className="approach_container">
        <div className="approach_image">
          <img src={approachImage} />
        </div>
        <div className="approach_text">
          <h1>My Approach</h1>
          <p>
            My approach to holistic wellness encompasses a deep understanding of
            the interconnectedness of the mind, body, and spirit. I take the
            time to truly listen and understand each individual's unique needs,
            allowing me to develop personalized wellness plans that address the
            whole person.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Approach;
