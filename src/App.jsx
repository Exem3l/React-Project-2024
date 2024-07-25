import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import News from './News.jsx';
import AboutUs from './AboutUs.jsx';
import "./App.css"

// заглушка от цыганей fjfjfjfjfjfjgit c
const Catalog = () => <div>Catalog Page</div>;

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;
