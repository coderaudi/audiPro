import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// layout components

// auth components

import Dashbord from "../component/dashbord/dashbord";
import HomePageLogin from "../view/login/login";
// view components
import StudentList from "../view/student/StudentList";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/coder/dashbord">Dashbord</Link>
            </li>
            <li>
              <Link to="/coder/login">Login</Link>
            </li>
            <li>
              <Link to="/coder/signup">Signup</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/coder/student">Student List</Link>
            </li>
          </ul>
        </nav>
        <Route path="/about/" component={About} />
        <Route path="/coder/dashbord" component={Dashbord} />
        <Route path="/coder/home" component={HomePageLogin} />
        <Route path="/coder/student" component={StudentList} />
      </Router>
    </div>
  );
}

export default AppRouter;
