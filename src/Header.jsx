import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
      localStorage.setItem('isLoggedIn', 'false');
      setIsLoggedIn(false);
  };

  const handleIconClick = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <header className="header">
      <div className="logo"><img className = "logo-img" src="public\logo.png" alt="" /></div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/catalog" className="nav-link">Catalog</Link>
        <Link to="/news" className="nav-link">News</Link>
        <Link to="/about" className="nav-link">About Us</Link>
      </nav>
      <div className="nav-right">
            <div className="right">
              <span className="Right" onClick={handleIconClick}>
                <img src='src/assets/ProfileIcon.svg' alt="Icon" />
              </span>
              <span className="Right"><img src='src\assets\Settings.svg'></img></span>
            </div>
        </div>
    </header>
  );
};

export default Header;
