/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Style.css';
import logo from '../assets/logo.png'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
        <div className="navbar">
      <div className="logo">
        <img
          src={logo}
          alt="Logo"
          className="logo-img"
        />
      </div>

      {/* Menu Links */}
      <nav className={`menu ${menuOpen ? 'show' : ''}`}>
      <a href="#about" className="menu-link active">
          Home
        </a>
        <a href="#about" className="menu-link ">
          About
        </a>
        <a href="#skills" className="menu-link">
          Skills
        </a>
        <a href="#project" className="menu-link">
          Project
        </a>
        <a href="#contact" className="menu-link">
          Contact
        </a>
      </nav>

      {/* External Links */}
      <div className="nav-links">
     
        <a
          href="https://www.linkedin.com/in/rhythm-munshi/"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          Linkedin ↗
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={toggleMenu}>
        ☰
      </button>
    </div>
    </div>
  );
};

export default Navbar;
