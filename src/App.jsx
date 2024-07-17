import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';

// заглушка от цыганей
const Home = () => <div>Home Page</div>;
const Catalog = () => <div>Catalog Page</div>;
const News = () => <div>News Page</div>;
const About = () => <div>About Us Page</div>;

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}


export default App;
