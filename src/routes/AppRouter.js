import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

// importing the routes / views

import Home from "../view/home/home";
import Error from "../view/notfound/404";
import Login from "../view/login/login";
import Notepad from "../view/notepad/notepad";
class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/addnote" component={Notepad} />

              <Route path="/" component={Error} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default AppRouter;
