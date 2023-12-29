import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel.css";

export const CarouselItem = ({ children }) => {
  return (
    <div className="carousel_item">
      <div className="quote_animation">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="61"
          viewBox="0 0 80 61"
          fill="none"
        >
          <path
            d="M30 0.5C13.5 0.5 0 14 0 30.5V60.5H30V30.5H10C10 19.4 18.9 10.5 30 10.5V0.5ZM80 0.5C63.5 0.5 50 14 50 30.5V60.5H80V30.5H60C60 19.4 68.9 10.5 80 10.5V0.5Z"
            fill="#D1D5D6"
          />
        </svg>
      </div>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipeRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div {...handlers} className="carousel">
      <div
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
        className="left_indicator"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <circle cx="30" cy="30" r="29.5" fill="white" stroke="white" />
          <path
            d="M30.6011 30.3534L40.4748 40.2271L35.0455 45.6564L19.389 29.9999L35.0455 14.3433L40.4748 19.7726L30.6011 29.6463L30.2475 29.9999L30.6011 30.3534Z"
            fill="black"
            stroke="white"
          />
        </svg>
      </div>

      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      <div
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
        className="right_indicator"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <circle cx="30" cy="30" r="29.5" fill="white" stroke="white" />
          <path
            d="M29.2627 29.6463L19.389 19.7726L24.8182 14.3434L40.4748 29.9999L24.8182 45.6564L19.389 40.2272L29.2627 30.3534L29.6163 29.9999L29.2627 29.6463Z"
            fill="black"
            stroke="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Carousel;
