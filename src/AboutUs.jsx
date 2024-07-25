import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What makes AORUS products unique?",
      answer: "AORUS products combine high performance with the latest technology, providing gamers with an unparalleled experience.",
      isOpen: false
    },
    {
      question: "Do AORUS products come with a warranty?",
      answer: "Yes, all AORUS products come with a standard warranty to ensure your purchase is protected.",
      isOpen: false
    },
    {
      question: "Where can I buy AORUS products?",
      answer: "AORUS products are available at major retailers and online stores.",
      isOpen: false
    },
    {
      question: "How can I join the AORUS community?",
      answer: "You can join the AORUS community through our website and social media channels.",
      isOpen: false
    }
  ]);

  const toggleFaq = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.isOpen = !faq.isOpen;
        } else {
          faq.isOpen = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className="about-us">
      <section className="why-choose-us">
        <div className="why-choose-us-content">
          <h1>About Us</h1>
          <p>AORUS is dedicated to providing gamers with the highest performance and most immersive experiences. Our products are crafted with the latest technology and premium materials to ensure you stay ahead of the competition.</p>
        </div>
      </section>
      <section className="benefits">
        <div className="benefit-item">
          <img src="src\AboutUs\1.svg" alt="Create Account" />
          <h3>Create an Account</h3>
          <p>Sign up using your email address or social media accounts to enjoy exclusive benefits.</p>
        </div>
        <div className="benefit-item">
          <img src="src\AboutUs\2.svg" alt="Unlock Badges" />
          <h3>Unlock Badges</h3>
          <p>Earn achievement badges by completing tasks and activities on the AORUS site.</p>
        </div>
        <div className="benefit-item">
          <img src="src\AboutUs\3.svg" alt="Get Rewards" />
          <h3>Get Rewards</h3>
          <p>Use points to redeem exclusive rewards and prizes.</p>
        </div>
        <div className="benefit-item">
          <img src="src\AboutUs\4.svg" alt="Level Up" />
          <h3>Level Up</h3>
          <p>Advance to higher levels to unlock even more privileges.</p>
        </div>
      </section>
      <section className="faqs">
        <h2>FAQs</h2>
        <p>Have questions? We have answers!</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${faq.isOpen ? 'open' : ''}`}
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <h3>{faq.question}</h3>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
