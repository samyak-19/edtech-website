// src/App.js
import React from 'react';
import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import Internships from './components/Internships';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
     <nav class="navbar">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#internships">Internships</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
        </ul>
    </nav>

      <div id="home">
        <Home />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="internships">
        <Internships />
      </div>

      <div id="about-us">
        <AboutUs />
      </div>

      <div id="contact-us">
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
