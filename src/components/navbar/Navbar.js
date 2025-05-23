import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <div className="nav-elements">
          <div className="logo">
          <a href="/">
            {" "}
            <img
              src="./images/searchmate-logo.png"
              alt="Logo"
              style={{ height: "45px" }}
            />
          </a>
          </div>
            <ul>
              <li>
                <NavLink 
                  to="/projects"
                  onClick={() => setIsNavExpanded(false)}
                  >Projects</NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about"
                  onClick={() => setIsNavExpanded(false)}
                  >About</NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact"
                  onClick={() => setIsNavExpanded(false)}
                  >Contact</NavLink>
              </li>
              <li>
              <a href="/contact">
                  <button className="nav-button-li"
                    >Hire Me</button>
                </a>
                </li>
            </ul>
            <div>
            <a href="/contact">
                  <button className="nav-button">Hire Me</button>
                </a>
                </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
