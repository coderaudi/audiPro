import React, { Component } from "react";
import NavBar from "../component/header/navbar";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {" "}
        <NavBar />
        student portal web header
      </div>
    );
  }
}

export default Header;
