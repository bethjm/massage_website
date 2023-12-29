import React from "react";
import YogaHeader from "../Headers/YogaHeader";
import IntroServices from "../UI/ServicesOfferings/IntroService";
import AreYou from "../UI/ServicesOfferings/AreYou";
import YogaFAQ from "../UI/ServicesOfferings/FAQ/YogaFAQ";
import Reviews from "../Reviews";
import Booking from "../UI/ServicesOfferings/Booking";
import AboutMassage from "../UI/ServicesOfferings/About/AboutMassage";

const YogaService = {
  title: "What is Yoga?",
  p1: `Yoga is a transformative practice that encompasses the mind, body, and spirit. With its origins rooted in ancient wisdom, yoga offers a holistic approach to well-being, fostering physical strength, mental clarity, and emotional balance.`,
  p2: `Stephanie embraces the essence of yoga, guiding her students on a journey of self-discovery and self-care. Through a combination of physical postures, breathwork, and mindfulness, Stephanie's yoga classes create a sacred space where students can cultivate inner peace, enhance their flexibility, and build strength.`,
};

const YogaAreYou = {
  title: `Are you looking for...`,
  Li1: `a practice to cultivate mindfulness and self-awareness?`,
  Li2: `tools to manage stress and find inner calm?`,
  Li3: `a way to improve your posture and overall body alignment?`,
  Li4: `a path to cultivate physical strength and flexibility?`,
  Li5: `a means to unlock your inner potential and personal growth?`,
  service: `yoga`,
};

function Yoga() {
  const serviceLink =
    "https://bodyworkbystephanie.noterro.com/service-category/35569/yoga"; // Replace with the actual link for the massage service

  return (
    <div className="massage_services">
      <div className="massage_services_container">
        <YogaHeader />
        <IntroServices
          title={YogaService.title}
          p1={YogaService.p1}
          p2={YogaService.p2}
          link={serviceLink} // Pass the link as a prop
        />
        <AreYou
          title={YogaAreYou.title}
          Li1={YogaAreYou.Li1}
          Li2={YogaAreYou.Li2}
          Li3={YogaAreYou.Li3}
          Li4={YogaAreYou.Li4}
          Li5={YogaAreYou.Li5}
          service={YogaAreYou.service}
        />
        <YogaFAQ />

        <Booking link={serviceLink} service={YogaAreYou.service} />
      </div>
    </div>
  );
}

export default Yoga;
