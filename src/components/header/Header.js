import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div className="hero-container">
<img className="home-banner-graphic" src="/cam-banner-home.svg" alt="banner home svg" />
<div className="hero-text">
            <h1>HI, I'M CAMERON</h1>
            <p>A Junior Full-Stack Developer & Marketing Expert</p>
            <button href="CameronW - CV Template.docx.pdf" download className="btn btn-light">Download CV</button>
            </div>
          
      </div>
  );
};

export default Header;
