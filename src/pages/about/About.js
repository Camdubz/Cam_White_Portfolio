import React from "react";
import "./About.css";

const About = () => {
  return (
    <div class="about-container">
      <div class="row-about">
        <div class="column-about">
          <img src="./images/cam-headshot.jpeg"  alt=""/>
        </div>
        <div class="column-about">
          <p>
          I’m Cameron — the SEO expert who delivers results as enduring as the Briscoes lady’s skincare routine. 
          While NZ food prices might force you to mortgage a block of cheese, my services won’t. 
          Think of me as the no bullshit SEO — all the quality, none of the $28 colby panic.
          <br/><br/>
          “She’ll be right” works for lost jandals, but not for SEO. Leave it to chance, and your site could end up as 
          “alright” as a Wellington picnic on a bad day. 
          <br/><br/>
          As the sole owner, operator, and certified overthinker of 
          meta descriptions, I’m here to make your brand world-famous in New Zealand.
          </p>
        </div>
      </div>
      <>
        <h2 className="brand-title">Brands I've worked with</h2>
      </>
      <div class="row-about-brands">
        <div class="column-about-brands">
          <img src="./images/doselogo.png" alt="" />
        </div>
        <div class="column-about-brands">
          <img src="./images/thematic-logo.png" alt="" />
        </div>
        <div class="column-about-brands">
          <img src="./images/sohl-logo.png"  alt=""/>
        </div>
        <div class="column-about-brands">
          <img src="./images/nzhco-logo.png"  alt=""/>
        </div>
        <div class="column-about-brands">
          <img src="./images/pandp-logo.png"  alt=""/>
        </div>
        <div class="column-about-brands">
          <img src="./images/beauty-nj-logo.png"  alt=""/>
        </div>
        <div class="column-about-brands">
          <img src="./images/vari-logo.png"  alt=""/>
        </div>
        <div class="column-about-brands">
          <img src="./images/dolphinpacific-logo.png"  alt=""/>
        </div>
      </div>
      </div>
  );
};

export default About;
