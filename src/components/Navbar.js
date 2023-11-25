import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeTab, setActiveTab] = useState('home'); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Supportcircle Logo" />
        <span>Support Circle</span>
      </div>
      <div className="nav-links">
        <ul className="nav-links">
          <li className={activeTab === 'home' ? 'active' : ''} onClick={() => handleTabClick('home')}><a href="#">Home</a></li>
          <li className={activeTab === 'about' ? 'active' : ''} onClick={() => handleTabClick('about')}><a href="#">About Us</a></li>
          <li className={activeTab === 'services' ? 'active' : ''} onClick={() => handleTabClick('services')}><a href="#">Services</a></li>
          <li className={activeTab === 'contact' ? 'active' : ''} onClick={() => handleTabClick('contact')}><a href="#">Contact Us</a></li>
        </ul>
        <button className="sign-up-button">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;

