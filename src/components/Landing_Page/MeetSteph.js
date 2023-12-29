import React from "react";

import "./MeetSteph.css";

import headshot from "../images/headshot.png";

function MeetSteph() {
  return (
    <div className="meet">
      <div className="meet_container">
        <div className="meet_text">
          <h1>Meet Stephanie</h1>
          <p>
            Stephanie is a dedicated and passionate practitioner with a deep
            commitment to holistic wellness. With over 12 years of experience,
            she has cultivated a unique approach to healing that encompasses
            massage therapy, Reiki, and yoga. Stephanie's warm and compassionate
            nature creates a safe and nurturing space for her clients, allowing
            them to embark on a transformative journey of self-discovery and
            well-being.
          </p>
          <p>
            When Stephanie is not working you can find her practicing yoga,
            taking a walk in nature or spending time with family and friends.
          </p>
        </div>
        <div className="headshot_image">
          <img
            src={headshot}
            alt="steph smiling. She has a nose ring and straight hair."
            className="meet_image"
          />
        </div>
      </div>
    </div>
  );
}

export default MeetSteph;
