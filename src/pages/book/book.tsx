import React from "react";
import "./book.scss";
import Rating from "../../components/rating/rating/rating";
import backIcon from "../../images/left_arrow.svg";

export interface IBookProps {
  title: string;
  cover: string;
  description: string;
  author: string;
  rating: number;
  progress: number;
  onClose?: () => void;
}

const Book: React.FC<IBookProps> = props => {
  return (
    <div className="b-book">
      <div className="e-back" onClick={() => (props.onClose ? props.onClose() : {})}>
        <img src={backIcon} alt="Back" />
      </div>
      <div className="e-cover">
        <img src={props.cover} alt={props.title} />
      </div>
      <div className="e-description">
        <div className="e-meta">
          <div className="e-meta-title">{props.title}</div>
          <div className="e-meta-author">{props.author}</div>
          <div className="e-meta-rating">
            <Rating rating={props.rating} />
          </div>
        </div>
        <div className="e-chapter">
          {props.description.split("\n").map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Book;
