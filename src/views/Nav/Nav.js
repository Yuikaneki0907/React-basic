import React from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/todo" className={({ isActive }) => (isActive ? "active" : "")}>
          Todos
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
        <NavLink to="/user" className={({ isActive }) => (isActive ? "active" : "")}>
          User
        </NavLink>

        {/* <Link to="/">Home</Link>
            <Link to="/todo">Todos</Link>
            <Link to="/about">About</Link> */}
      </div>
    );
  }
}

export default Nav;
