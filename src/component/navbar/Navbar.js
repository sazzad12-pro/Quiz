import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/">Topics</NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Statistics
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Blog
      </NavLink>
    </div>
  );
};

export default Navbar;
