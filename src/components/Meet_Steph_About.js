import React from "react";

import "./Meet_Steph_About.css";

import headshot from "../components/images/headshot.png";

function Meet_Steph_About() {
  return (
    <div className="meet_steph">
      <div className="meet_steph_container">
        <img
          src={headshot}
          alt="steph smiling. She has a nose ring and straight hair."
          className="meet_steph_image"
        />
        <div className="meet_steph_text">
          <h1>About Stephanie</h1>
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
        <div></div>
      </div>
    </div>
  );
}

export default Meet_Steph_About;
