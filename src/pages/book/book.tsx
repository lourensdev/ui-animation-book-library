import React from "react";
import "./book.scss";

export interface IBookProps {
  title: string;
  cover: string;
  description: string;
  author: string;
  rating: number;
  progress: number;
}

const Book: React.FC<IBookProps> = props => {
  return (
    <div>
      <img src={props.cover} alt={props.title} />
      Title: {props.title}
      Author: {props.author}
      Rating: {props.rating}
      Description: {props.description}
    </div>
  );
};

export default Book;
