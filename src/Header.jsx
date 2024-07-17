import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img className = "logo-img" src="https://image.tmdb.org/t/p/original/q39KSjDTL6KGiIBqnQVSRMxv9fG.jpg" alt="" />Bo Sinn GunShop</div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/catalog" className="nav-link">Catalog</Link>
        <Link to="/news" className="nav-link">News</Link>
        <Link to="/about" className="nav-link">About Us</Link>
      </nav>
      <div className="nav-right">
        <div className="Right">
          <span className="Right">Profile</span>
          <span className="Right"> Settings</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
