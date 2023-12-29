import React from "react";

import "./About.css";
import AboutHeader from "./Headers/AboutHeader";
import Meet_Steph_About from "./Meet_Steph_About";
import Reviews from "/Users/BethM/Desktop/stephmassage/src/components/Reviews.js";
import Journey from "./Journey";

function About() {
  return (
    <div className="about">
      <AboutHeader />
      <Meet_Steph_About />
      <Journey />
      <Reviews />
    </div>
  );
}

export default About;
