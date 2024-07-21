import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.Twitter.com">
            <img src="src\assets\TwitterIcon.svg" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com">
            <img src="src\assets\InstagramIcon.svg" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com">
            <img src="src\assets\YouTubeIcon.svg" alt="YouTube" />
          </a>
          <a href="https://www.linkedin.com">
            <img src="src\assets\LinkedInIcon.svg" alt="LinkedIn" />
          </a>
        </div>
        <div className="company-info">
          <p>AORUS is a premium gaming brand, powered by GIGABYTE, delivering high-end gaming hardware and accessories. Located in Baku, we strive to provide top-notch gaming experiences with cutting-edge technology and innovation.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
