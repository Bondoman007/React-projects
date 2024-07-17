import React from 'react';


const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>My Blog</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#posts">Posts</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
