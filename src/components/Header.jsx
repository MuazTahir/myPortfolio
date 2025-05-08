import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false); // State for mobile menu toggle

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#">Portfolio</a>
        </div>
        <ul className={`navbar-links ${isMobile ? "active" : ""}`}>

          <li>
            <Link spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer" to="about">
              About
            </Link>
          </li>
          <li>
            <Link spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer" to="experties">
              Experties
            </Link>
          </li>

        </ul>
        <div className="navbar-toggle" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
