import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron">
            <h1>Bootstrap Tutorial</h1>
            <p>
              Bootstrap is the most popular HTML, CSS, and JS framework for
              developing responsive, mobile-first projects on the web.
            </p>
          </div>
          <p>This is some text.</p>
          <p>This is another text.</p>
          <Link to="/login">Login Page</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
