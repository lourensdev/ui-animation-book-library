import React from "react";
import "./home.scss";
import BookTile from "../../components/book-tile";

import cover1 from "../../images/cover_01.png";
import cover2 from "../../images/cover_02.png";
import cover3 from "../../images/cover_03.png";

class Home extends React.Component<{}, {}> {
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
        <BookTile title="Star Wars" progress={70} cover={cover1} />
        <BookTile title="The Empire Strikes Back" progress={44} cover={cover2} />
        <BookTile title="Return Of The Jedi" progress={87} cover={cover3} />
      </div>
    );
  }
}

export default Home;
