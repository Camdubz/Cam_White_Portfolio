import React from "react";
import "./projectsSection.css";
import { Link } from "react-router-dom";



const ProjectsSection = () => {
  return (
    <div className="grid-container">
      <div class="row">
        <h1 className="title-projects">My Projects</h1>
        <p className="sub-text-projects">
          Search projects by title or filter by category
        </p>
        
        
        <div class="column">
            <Link to="/a2xcase">
          <div className="card">
          
            <img
              src="screencapture-a2xaccounting-blog-2024-01-17-16_40_44.png"
              alt="Avatar"
              style={{ width: "100%" }}
            /> 
            <div className="container">
              <h4>
                <b>A2X</b>
              </h4>
              <p>SEO Content Marketing </p>
            </div>
          </div>
          </Link>
        </div>
        
        <div class="column">
        <Link to="/dosecase">
          <div className="card">
            <img
              src="doseandcohome.png"
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h4>
                <b>Dose & Co</b>
              </h4>
              <p>Integrated Marketing Communications</p>
            </div>
          </div>
          </Link>
        </div>
        <div class="column">
            <Link to="/beautyninja">
          <div className="card">
            <img
              src="screencapture-beauty-nj-blogs-all-blogs-2024-01-17-16_33_56.png"
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h4>
                <b>Beauty Ninja</b>
              </h4>
              <p>UX, CRO, SEO, Influencer Marketing, Affiliate Marketing</p>
            </div>
          </div>
          </Link>
        </div>
      </div>

      <div class="row">
        <div class="column">
            <Link to="/sohl">
          <div className="card">
            <img
              src="sohl-home.png"
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h4>
                <b>SOHL</b>
              </h4>
              <p>UX/Integrated Marketing Communications</p>
            </div>
          </div>
          </Link>
        </div>
        <div class="column">
            <Link to="/nzhco">
          <div className="card">
            <img
              src="nzhoneyco-blog.png"
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h4>
                <b>NZ Honey Co.</b>
              </h4>
              <p>Thematic Research & Growth Analytics</p>
            </div>
          </div>
          </Link>
        </div>
        <div class="column">
            <Link to="/thematic">
          <div className="card">
            <img
              src="measurement-marketing-process.png"
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h4>
                <b>Beauty Ninja</b>
              </h4>
              <p>UX, CRO, SEO, Influencer Marketing, Affiliate Marketing</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <div className="button-container-projects">
        <a href="/projects"><button className="nav-button-projects">See more</button></a>
      </div>
    </div>
  );
};

export default ProjectsSection;
