import React from 'react';

const Header = () => {
  return (
    <header>
      <h1 className="header-title">Loki's Portfolio</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
