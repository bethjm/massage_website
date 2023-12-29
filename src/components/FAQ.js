import React from "react";
import "./FAQ.css";

import { Link } from "react-router-dom";

import GenFAQ from "./images/generalfaq.png";
import massageFAQ from "./images/massageFAQ.png";
import reikiFAQ from "./images/reikiFAQ.png";
import cuppingFAQ from "./images/cuppingFAQ.png";
import yogaFAQ from "./images/yogaFAQ.png";

function FAQ() {
  return (
    <div className="faq">
      <div className="faq_container">
        <h1>What do you have questions about?</h1>

        <div className="faq_button_container">
          <Link to="/faq_general">
            <button className="faq_button">
              <img
                id="faq_image"
                src={GenFAQ}
                alt="photo of conversation bubbles"
              />
              general
            </button>
          </Link>
          <Link to="/faq_massage">
            <button className="faq_button">
              <img
                src={massageFAQ}
                id="faq_image"
                alt="photo of person on a massage tabel with a massage therapist massaing them. Photo attributed to Good Ware "
              />
              massage
            </button>
          </Link>
          <Link to="/faq_yoga">
            <button className="faq_button">
              <img
                src={yogaFAQ}
                id="faq_image"
                alt="person doing warrior pose. Photo attributed to Vitaly Gorbachev"
              />
              yoga
            </button>
          </Link>
          <Link to="/faq_reiki">
            <button className="faq_button">
              <img
                src={reikiFAQ}
                id="faq_image"
                alt="photo of palms facing up with ball of energy between them. Photo attributed to Freepik"
              />
              reiki
            </button>
          </Link>
          <Link to="/faq_cupping">
            <button className="faq_button">
              <img
                src={cuppingFAQ}
                id="faq_image"
                alt="photo of a persons back with cupping marks. Photo attributed to dDara"
              />
              cupping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
