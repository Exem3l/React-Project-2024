import React from 'react';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          color: "#ff5500",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0",display: "flex", gap:"0px",justifyContent:"center" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='custom-dot'
        style={{
          height: "3px",
          clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)",
          color: "#ff5500",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease"
          
        }}
      >
      </div>
    )
  };
  return (
    <div>
      <div className="banner">
        <img src="src\assets\banner.jpg" alt="Banner" className="banner-img" />
        <div className="banner-content">
          <h1>Welcome to AORUS</h1>
          <div className="banner-buttons">
            <button className="btn orange-btn">About</button>
            <button className="btn gray-btn">News</button>
          </div>
        </div>
      </div>
      <section className="intro-section">
        <h2 className="intro-heading">Gaming Devices</h2>
          <p>
            AORUS is a leading company in manufacturing high-performance motherboards, graphics cards, laptops, gaming peripherals, and systems. We strive to unite with gamers to boldly push the limits and continue the fight towards ultimate glory!
          </p>
      </section>
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
