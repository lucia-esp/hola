import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav-item">home</div>
      </Link>
      <Link to="/favoriteGames">
        <div className="nav-item">favorite games</div>
      </Link>
      <Link to="/animalCrossing">
        <div className="nav-item">AC</div>
      </Link>
    </div>
  );
};

export default Nav;
