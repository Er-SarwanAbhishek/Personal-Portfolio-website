import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import Home from './pages/home/Home';
import React from 'react';
import Themes from './components/Themes';



function App() {
  return (
    <HashRouter>
    <Navbar />
    <Themes />
    <Routes>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
      
    </HashRouter>
  );
}

export default App;
