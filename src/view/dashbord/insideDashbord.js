import React, { Component } from "react";

import AppRouter from "../../routes/AppRouter";

class InsideDashbord extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default InsideDashbord;
