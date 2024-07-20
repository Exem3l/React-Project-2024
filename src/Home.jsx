import React from 'react';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
  return (
    <div>
      <div className="banner">
        <img src="src\assets\banner.jpg" alt="Banner" className="banner-img" />
        <div className="banner-content">
          <h1>Welcome to AORUS</h1>
          <div className="banner-buttons">
            <button className="btn white-btn">White Button</button>
            <button className="btn gray-btn">Gray Button</button>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <h3><img src="src/assets/pc-1.jpg" alt="Slide 1" /></h3>
        </div>
        <div>
          <h3><img src="src/assets/pc-1.jpg" alt="Slide 2" /></h3>
        </div>
        <div>
          <h3><img src="src/assets/pc-1.jpg" alt="Slide 3" /></h3>
        </div>
        <div>
          <h3><img src="src/assets/pc-1.jpg" alt="Slide 4" /></h3>
        </div>
        <div>
          <h3><img src="src/assets/pc-1.jpg" alt="Slide 5" /></h3>
        </div>
        <div>
          <h3><img src="src/assets/pc-1.jpg" alt="Slide 6" /></h3>
        </div>
      </Slider>
    </div>
    
  );
}

export default Home;
