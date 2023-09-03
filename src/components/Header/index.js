import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main-header">
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/" className="header-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/settings" className="header-link">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
