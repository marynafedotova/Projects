import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <div>
      <div className={`page-overlay ${isMobileMenuOpen ? 'open-mobile-menu' : ''}`} onClick={closeMobileMenu}></div>
      <div className={`menu-panel ${isMobileMenuOpen ? 'open-mobile-menu' : ''}`}>
        <div className="panel-top">
          <div className="logo">
            <a href="/">
              <img src="public/images/Logo.png" alt="logo" />
            </a>
          </div>
          <div className="hamburger-wrap">
            <button id="hamb-btn-mobile" className={`hamburger hamburger--squeeze ${isMobileMenuOpen ? 'is-active' : ''}`} type="button" onClick={toggleMobileMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <nav>
          <ul className="mobile-menu">
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/aboutus" onClick={closeMobileMenu}>About Us</Link></li>
            <li><Link to="/services" onClick={closeMobileMenu}>Services</Link></li>
          </ul>
        </nav>
      </div>
      <header>
          <div className="nav-container">
            <div className='logo'>
              <a href="/">
              <img src="public/images/Logo.png" alt="logo" />
              </a>
            </div>
            <nav>
              <ul>
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/aboutus">About Us</Link></li>
              <li><Link className="nav-link" to="/services">Services</Link></li>
              </ul>
            </nav>
            <div className="contacts">
              <a href="#">Contact Us</a>
            </div>
            <div className="hamburger-wrap">
              <button id="hamb-btn" className="hamburger hamburger--squeeze" type="button" onClick={toggleMobileMenu}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
      </header>
    </div>
  );
};