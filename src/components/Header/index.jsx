// Navbar.js
import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import GameDetails from "../busca";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">BestBrowserGames</div>
      <span><GameDetails/></span>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>       
      </ul>
    </div>
  );
}

export default Navbar;
