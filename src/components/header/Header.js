import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="hero-container">
     
      <div className="hero-text">
        <h1>Your growth strategy is like a soggy pie: Technically edible but no one’s bragging.</h1>
        <p>We’ll cook up a marketing and sales strategy so crisp, your competitors will be begging for the recipe. </p>
        <a href="./downloads/pricing-chart-searchmate.pdf" download>
          <button className="btn btn-light">Serve me crispy growth </button>
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
