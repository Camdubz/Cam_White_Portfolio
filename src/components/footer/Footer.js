import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const fontStyles = { color: "#d3d3d3", fontSize: "60px" };

const Footer = () => {
  return (
    <div className="footer">
      <hr className="divider" />
      {/* <h2>Check out my socials</h2> */}
      <div className="socials-block">
        <Link
          to="https://www.linkedin.com/in/cameron-white-55b7b02aa/"
          target="_blank"
        >
          <FaLinkedin style={fontStyles} />
        </Link>
      </div>
      <p>Searchmate® All Rights Reserved 2025</p>
    </div>
  );
};

export default Footer;
