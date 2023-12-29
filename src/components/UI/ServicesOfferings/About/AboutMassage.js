import React from "react";

import "./About.css";

import headshot from "./headshot.png";

function AboutMassage() {
  return (
    <div className="about-massage">
      <div className="about-massage-container">
        <div className="photo-content">
          <img
            src={headshot}
            alt="steph smiling. She has a nose ring and straight hair."
            className="meet_image"
          />
        </div>
        <div className="text-content">
          <h1>The journey of Bodywork by Stephanie...</h1>
          <p>
            Stephanie's passion for the healing arts began at a young age when
            she discovered the profound impact touch could have on the mind,
            body, and spirit. Growing up, she was always drawn to helping others
            find comfort and relief from their physical and emotional
            challenges.
          </p>
          <br />
          <p>
            What has fueled Stephanies journey is her genuine compassion and
            empathy for others. Stephanie believes that healing is not solely
            about manipulating the body but also about creating a safe and
            nurturing space for her clients. With warmth, kindness, and the
            ability to listen deeply, she establishes a foundation of trust and
            understanding.
          </p>
          <br />
          <p>
            Whether it's easing chronic pain, reducing stress and anxiety, or
            simply providing a moment of relaxation and rejuvenation, Stephanie
            is committed to helping her clients achieve a state of balance and
            harmony.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMassage;
