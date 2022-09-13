import React from "react";
import { Link } from "react-router-dom";

const NavL = () => {
  return (
    <div>
      <nav>
        <div className="nav-content">
          <div className="logo">
            <a href="#" className="nav-a">
              Countries App
            </a>
          </div>
          <ul className="nav-links">
            <li>
              <Link className="nav-a" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-a" to="/countriesList">
                Countries
              </Link>
            </li>
            <li>
              <Link className="nav-a" to="/favList">
                My favorite
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavL;
