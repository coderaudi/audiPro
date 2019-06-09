import React, { Component } from "react";

import { Link } from "react-router-dom";
class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>NOt found 404 </h1>
          <Link to="/home">Home</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
