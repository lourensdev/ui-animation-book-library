import React from "react";

import starFull from "../../../images/star.svg";
import starEmpty from "../../../images/star_empty.svg";

import "./rating.scss";

interface IRatingProps {
  rating: number;
}

const totalStars: number = 5;

const stars = (rating: number) => {
  let starsArr: number[] = [];
  for (let i = 0; i < totalStars; i++) {
    if (i < rating) {
      starsArr.push(1);
    } else {
      starsArr.push(0);
    }
  }
  return starsArr;
};

const Rating: React.FC<IRatingProps> = props => {
  return (
    <div className="b-rating">
      {stars(props.rating).map(star => {
        if (star === 1) {
          return <img className="e-star" src={starFull} alt="Star" />;
        } else {
          return <img className="e-star" src={starEmpty} alt="Star Empty" />;
        }
      })}
    </div>
  );
};

export default Rating;
