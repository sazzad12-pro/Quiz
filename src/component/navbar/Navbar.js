import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/">Topics</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </div>
  );
};

export default Navbar;
