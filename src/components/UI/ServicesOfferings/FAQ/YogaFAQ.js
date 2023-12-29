import React from "react";
import FAQAPI from "../../../APIS/FAQAPI";
import Accordion from "../../Accordion/Accordion";

import "./MiniFAQ.css";

function YogaFAQ() {
  // Specify the question IDs you want to display
  const questionIds = [1, 2, 3, 4, 8];

  // Create an empty array to store the mapped elements
  const mappedElements = [];

  // Access the 'massage' category directly from the FAQAPI
  const yogaCategory = FAQAPI.yoga;

  // Filter the questions based on the specified question IDs
  const filteredQuestions = yogaCategory.filter((question) =>
    questionIds.includes(Number(question.id))
  );

  // Map the filtered questions to create the desired elements
  const elements = filteredQuestions.map((question) => {
    return {
      question: question.question,
      answer: question.answer,
    };
  });

  // Concatenate the mapped elements to the main array
  mappedElements.push(...elements);

  return (
    <div className="mini_FAQ">
      <div className="mini_FAQ_container">
        <div className="mini_FAQ_column">
          <div className="meet_image"></div>
        </div>
        <div className="mini_FAQ_accordion">
          <Accordion accordionWidth="100%">
            {mappedElements.map(({ question, answer }) => (
              <Accordion.Item key={question}>
                <Accordion.Collapsed
                  id={question}
                  color="white"
                  backgroundColor="var(--dark-blue)"
                >
                  {question}
                </Accordion.Collapsed>
                <Accordion.Expanded>{answer}</Accordion.Expanded>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default YogaFAQ;
