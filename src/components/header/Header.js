import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="hero-container">
     
      <div className="hero-text">
        <h1>Your SEO is like a soggy pie: Technically edible, but no one’s bragging.</h1>
        <p>We’ll bake up a strategy so crisp, even Google asks for seconds. </p>
        <a href="./downloads/pricing-chart-searchmate.pdf" download>
          <button className="btn btn-light">Serve Me Crispy SEO </button>
        </a>
      </div>
       <img
        className="home-banner-graphic"
        src="./images/meat-pie.png"
        alt="banner home svg"
      />
    </div>
  );
};

export default Header;
