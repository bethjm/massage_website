import React from "react";
import ReikiHeader from "../Headers/ReikiHeader";
import IntroServices from "../UI/ServicesOfferings/IntroService";
import AreYou from "../UI/ServicesOfferings/AreYou";
import ReikiFAQ from "../UI/ServicesOfferings/FAQ/ReikiFAQ";
import Booking from "../UI/ServicesOfferings/Booking";

const ReikiService = {
  title: "What is Reiki?",
  p1: `Reiki is  a powerful healing technique originating in Japan. Stephanie channels healing energy through her hands, allowing it to flow freely to her clients. Through the gentle touch and compassionate presence, Reiki with Stephanie creates a safe and nurturing space for clients to release tension, reduce stress, and support their overall well-being.`,
  p2: `Whether combined with massage therapy or offered as a standalone service, Stephanie's Reiki sessions offer a transformative and deeply rejuvenating experience.`,
};

const ReikiAreYou = {
  title: `Are you looking for...`,
  Li1: `a way to release emotional and energetic blockages?`,
  Li2: `support in your personal growth and spiritual journey?`,
  Li3: `a deeper sense of relaxation and inner peace`,
  Li4: `a sense of energetic alignment and balance?`,
  service: `reiki`,
};

function Reiki() {
  const serviceLink =
    "https://bodyworkbystephanie.noterro.com/service/119946/reiki"; // Replace with the actual link for the massage service

  return (
    <div className="massage_services">
      <div className="massage_services_container">
        <ReikiHeader />
        <IntroServices
          title={ReikiService.title}
          p1={ReikiService.p1}
          p2={ReikiService.p2}
          link={serviceLink} // Pass the link as a prop
        />
        <AreYou
          title={ReikiAreYou.title}
          Li1={ReikiAreYou.Li1}
          Li2={ReikiAreYou.Li2}
          Li3={ReikiAreYou.Li3}
          Li4={ReikiAreYou.Li4}
          service={ReikiAreYou.service}
        />
        <ReikiFAQ />
        <Booking link={serviceLink} service={ReikiAreYou.service} />
      </div>
    </div>
  );
}

export default Reiki;
