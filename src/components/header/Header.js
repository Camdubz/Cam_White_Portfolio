import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div className="hero">
      <div className="row">
        <div className="column-banner">
          <span>
            <h1>HI, I'M CAMERON</h1>
            <p>A Junior Full-Stack Developer & Marketing Expert</p>
            <a href="CameronW - CV Template.docx.pdf" download className="btn btn-light">
                Download CV
            </a>
          </span>
        </div>
        <div className="column">
        <img className="home-banner-graphic" src="/cam-banner-home.svg" alt="banner home svg" />
        </div>
      </div>
      </div>
  );
};

export default Header;
