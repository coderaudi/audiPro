import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// layout components

import Home from "../view/layout/home";

// auth components

import Signup from "../view/auth/signup";
import Login from "../view/auth/login";

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
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
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

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />

        <Route path="/coder/student" component={StudentList} />
        <Route path="/coder/login" component={Login} />
        <Route path="/coder/signup" component={Signup} />
      </div>
    </Router>
  );
}

export default AppRouter;
