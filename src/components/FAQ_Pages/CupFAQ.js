import React from "react";

import "./GenFAQ.css";

import FAQAPI from "../APIS/FAQAPI";

import Accordion from "../UI/Accordion/Accordion";
import FAQColumn from "./FAQColumn";

function CupFAQ() {
  return (
    <div className="genfaq">
      <div className="genfaq_container">
        <FAQColumn />
        <div className="genfaq_accordion">
          <Accordion>
            {FAQAPI.cupping.map(({ question, answer }) => {
              return (
                <Accordion.Item key={question}>
                  <Accordion.Collapsed id={question}>
                    {question}
                  </Accordion.Collapsed>
                  <Accordion.Expanded>{answer}</Accordion.Expanded>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default CupFAQ;
