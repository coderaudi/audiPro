import React, { Component } from "react";

// import Header from "../view/header";
import Footer from "../view/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div>test</div>
        <Footer />
      </div>
    );
  }
}

export default App;
