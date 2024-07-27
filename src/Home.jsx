import React from 'react';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import products from './Products.js';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:2000,
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
        {products.map(product => (
          <div key={product.id} className="slider">
            <img src={product.image} alt={product.name} className="slider-image" />
            <h3 className="product-name">{product.name}</h3>
          </div>
        ))}
      </Slider>
        <section className="cooling-section">
          <div className="cooling-text">
            <h2>Exceptional Cooling for All Computers</h2>
            <p>
              At AORUS, we prioritize optimal cooling solutions to ensure peak performance for all your computing needs. Our advanced cooling technologies prevent overheating, enhance system stability, and prolong the lifespan of your components.
            </p>
          </div>
          <div className="cooling-image">
            <img
              src="src/assets/ezgif-4-e082afa722.gif"
              alt="Cooling Technology"
              width="560"
              height="315"
            />
          </div>
        </section>

    </div>
    
  );
}

export default Home;
