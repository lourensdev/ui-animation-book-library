import React from "react";
import "./app.scss";
import Home from "./pages/home/home";
import Book, { IBookProps } from "./pages/book/book";

import cover1 from "./images/cover_01.png";
import cover2 from "./images/cover_02.png";
import cover3 from "./images/cover_03.png";

interface IAppState {
  book: IBookProps | null;
}

const books: IBookProps[] = [
  {
    cover: cover1,
    title: "Star Wars",
    author: "Leorge Gucas",
    rating: 4,
    description: "Some description",
    progress: 70
  },
  {
    cover: cover3,
    title: "Return Of The Jedi",
    author: "Leorge Gucas",
    rating: 4,
    description: "Some description",
    progress: 87
  },
  {
    cover: cover2,
    title: "The Empire Strikes Back",
    author: "Leorge Gucas",
    rating: 4,
    description: "Some description",
    progress: 44
  }
];

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      book: null
    };
  }
  render() {
    return (
      <div className="b-frame">
        <div className="e-bezel">
          <div className="e-scroll-view">
            {this.state.book !== null ? <Book {...this.state.book} /> : null}
            <Home onBookSelect={index => this.setState({ book: books[index] })} books={books} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
