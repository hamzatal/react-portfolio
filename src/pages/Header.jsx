import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="logo">
        <span style={{color: "#00abf0"}}>H</span>amza.
      </Link>
      <nav className="navbar">
        <Link 
          to="/" 
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={location.pathname === "/about" ? "active" : ""}
        >
          About Me
        </Link>
        <Link 
          to="/myjourney" 
          className={location.pathname === "/myjourney" ? "active" : ""}
        >
          My Journey
        </Link>
        <Link 
          to="/project" 
          className={location.pathname === "/project" ? "active" : ""}
        >
          My Project
        </Link>
        <Link 
          to="/contact" 
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact Me!
        </Link>
      </nav>
    </header>
  );
}

export default Header;