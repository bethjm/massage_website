import React from "react";

import Header from "../components/Headers/LandingHeader";
import Services from "./Landing_Page/Services";
import Approach from "./Landing_Page/Approach";
import Reviews from "./Reviews";
import MeetSteph from "./Landing_Page/MeetSteph";
import Values from "./Landing_Page/Values";
import BookNow from "./Landing_Page/BookNow";

function Landing() {
  return (
    <>
      <Header />
      <Services />
      <MeetSteph />
      <Approach />
      <Values />
      <Reviews />
      <BookNow />
    </>
  );
}

export default Landing;
