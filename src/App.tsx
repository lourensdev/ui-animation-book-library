import React from "react";
import "./app.scss";
import Home from "./pages/home/home";

const App: React.FC = () => {
  return (
    <div className="b-frame">
      <div className="e-scroll-view">
        <Home />
      </div>
    </div>
  );
};

export default App;
