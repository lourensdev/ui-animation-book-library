import React from "react";
import "./home.scss";
import BookTile from "../../components/book-tile";
import { IBookProps } from "../book/book";

interface IBooksProps {
  books: IBookProps[];
  onBookSelect: (index: number) => void;
}

class Home extends React.Component<IBooksProps, {}> {
  render() {
    return (
      <div className="b-home">
        <div className="e-home-title">
          Your <br />
          <strong>Bookshelf.</strong>
        </div>
        <div className="e-hero">
          <div
            className="e-hero-text"
            style={{
              width: "90px",
              height: "5px",
              opacity: 0.4,
              marginBottom: "15px"
            }}
          ></div>
          <div
            className="e-hero-text"
            style={{
              width: "130px",
              height: "10px"
            }}
          ></div>
        </div>
        <div className="e-tabs">
          <div
            className="e-tab m-active"
            style={{
              width: "30px"
            }}
          ></div>
          <div
            className="e-tab"
            style={{
              width: "70px"
            }}
          ></div>
          <div
            className="e-tab"
            style={{
              width: "70px"
            }}
          ></div>
          <div
            className="e-tab"
            style={{
              width: "50px"
            }}
          ></div>
        </div>
        {this.props.books.map((book, index) => {
          return (
            <BookTile
              key={index}
              onClick={() => this.props.onBookSelect(index)}
              title={book.title}
              progress={book.progress}
              cover={book.cover}
            />
          );
        })}
      </div>
    );
  }
}

export default Home;
