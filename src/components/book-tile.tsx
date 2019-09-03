import React from "react";
import "./book-tile.scss";

interface IBookTileProps {
  cover: string;
  title: string;
  progress: number;
}

const BookTile: React.FC<IBookTileProps> = props => {
  return (
    <div className="b-book-tile">
      <img className="e-tile-cover" src={props.cover} alt="Book Cover" />
      <div className="e-tile-content">
        <div className="e-tile-title">{props.title}</div>
        <div className="e-tile-author">Leorge Gucas</div>
        <div
          className="e-tile-progress"
          style={{
            width: `${props.progress}%`
          }}
        ></div>
      </div>
    </div>
  );
};

export default BookTile;
