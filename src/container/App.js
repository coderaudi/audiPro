import React, { Component } from "react";
import Dashbord from "../component/dashbord/dashbord";
import AppRouter from "../routes/AppRouter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Dashbord />
        <AppRouter />
      </div>
    );
  }
}

export default App;
