import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import News from './News.jsx';
import AboutUs from './AboutUs.jsx';
import Catalog from './Catalog.jsx';
import Login from './Reg Module/Login.jsx';
import Register from './Reg Module/Register.jsx';
import "./App.css"


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login setIsLoggedIn={() => {}} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;
