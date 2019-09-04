import React from "react";
import "./app.scss";
import Home from "./pages/home/home";
import Book from "./pages/book/book";

const App: React.FC = () => {
  return (
    <div className="b-frame">
      <div className="e-bezel">
        <div className="e-scroll-view">
          <Book />
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
