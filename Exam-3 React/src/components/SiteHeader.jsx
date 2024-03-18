import React, { useState } from 'react';

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
              <img src="src/assets/images/logo.jpg" alt="logo" />
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
            <li><a href="/" onClick={closeMobileMenu}>HOME</a></li>
            <li><a href="#aboutus-block" onClick={closeMobileMenu}>ABOUT US</a></li>
            <li><a href="#fav-movies-list" onClick={closeMobileMenu}>FAVORITE</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>CONTACTS</a></li>
          </ul>
        </nav>
      </div>
      <header>
        <div className="container">
          <div className="nav-container">
            <div className='logo'>
              <a href="/">
                <img src="src/assets/images/logo.jpg" alt="logo" />
              </a>
            </div>
            <nav>
              <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="#aboutus-block">ABOUT US</a></li>
                <li><a href="#fav-movies-list">FAVORITE</a></li>
                <li><a href="#contact">CONTACTS</a></li>
              </ul>
            </nav>
            <div className="hamburger-wrap">
              <button id="hamb-btn" className="hamburger hamburger--squeeze" type="button" onClick={toggleMobileMenu}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

