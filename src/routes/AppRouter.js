import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// layout components

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
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>
        <Route path="/home" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/user" component={Users} />
      </Router>
    </div>
  );
}

export default AppRouter;
