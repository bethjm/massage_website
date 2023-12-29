import React from "react";

import MassageHeader from "../Headers/MassageHeader";
import IntroServices from "../UI/ServicesOfferings/IntroService";
import AreYou from "../UI/ServicesOfferings/AreYou";
import MassageFAQ from "../UI/ServicesOfferings/FAQ/MassageFAQ";
import Booking from "../UI/ServicesOfferings/Booking";

const MassageService = {
  title: "What is massage therapy?",
  p1: `Massage is a time-honored practice that offers numerous benefits for relaxation, healing, and overall well-being. With skilled manipulation of soft tissues, massage therapists like Steph can help reduce stress, relieve muscle tension, and improve circulation.`,
  p2: `Steph's personalized approach ensures a tailored experience. Regular massage sessions promote self-care, managing stress, and nurturing a healthier connection with your body. Steph's passion and expertise as a massage therapist guarantee a rejuvenating experience that leaves you feeling restored and revitalized.`,
};

const MassageAreYou = {
  title: `Do you struggle with...`,
  Li1: `Daily stressors weighing you down? `,
  Li2: `Muscle discomfort or tension? `,
  Li3: `Recovering from intense workouts?`,
  Li4: `Finding moments of tranquility and self-care?`,
  Li5: `Finding a massage therapist who truly listens to your needs?`,
  service: `massage`,
};

function Massage() {
  const serviceLink =
    "https://bodyworkbystephanie.noterro.com/service-category/35565/massage-therapy"; // Replace with the actual link for the massage service

  return (
    <div className="massage_services">
      <div className="massage_services_container">
        <MassageHeader />
        <IntroServices
          title={MassageService.title}
          p1={MassageService.p1}
          p2={MassageService.p2}
          link={serviceLink} // Pass the link as a prop
        />
        <AreYou
          title={MassageAreYou.title}
          Li1={MassageAreYou.Li1}
          Li2={MassageAreYou.Li2}
          Li3={MassageAreYou.Li3}
          Li4={MassageAreYou.Li4}
          Li5={MassageAreYou.Li5}
          service={MassageAreYou.service}
        />
        <MassageFAQ />
        <Booking link={serviceLink} service={MassageAreYou.service} />
      </div>
    </div>
  );
}

export default Massage;
