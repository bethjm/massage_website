import React from "react";

import Carousel, { CarouselItem } from "./UI/Carousel/Carousel";

import ReviewsAPI from "./APIS/ReviewsAPI";

import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews_container">
        <Carousel>
          {ReviewsAPI.map((review) => {
            return (
              <CarouselItem key={review.id}>
                <div className="review_carousel">
                  <p className="review_text">{review.review}</p>
                  <h4 className="review_name">{review.name}</h4>
                </div>
              </CarouselItem>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Reviews;
