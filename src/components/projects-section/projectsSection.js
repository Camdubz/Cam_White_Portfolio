import React from "react";
import "./projectsSection.css";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <>
      <div class="row-projects-main">
        <h2 className="title-projects-main">Portfolio</h2>
        <p className="sub-text-projects-main">
          Explore the projects listed below to witness my skills in action
        </p>

        <div class="column-projects-main">
          <Link className="link-projects" to="/a2xcase">
            <div className="card-projects-main">
              <img
                src="./images/screencapture-a2xaccounting-blog-2024-01-17-16_40_44.png"
                alt="avatar"
                style={{ width: "100%" }}
              />
              <div className="container-projects-main">
                <h3>
                  <b>A2X</b>
                </h3>
                <p>SEO Content Marketing </p>
              </div>
            </div>
          </Link>
        </div>

        <div class="column-projects-main">
          <Link className="link-projects-main" to="/dosecase">
            <div className="card-projects-main">
              <img
                src="./images/doseandcohome.png"
                alt="Avatar"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h3>
                  <b>Dose & Co</b>
                </h3>
                <p>Integrated Marketing Communications</p>
              </div>
            </div>
          </Link>
        </div>
        <div class="column-projects-main">
          <Link className="link-projects-main" to="/beautyninja">
            <div className="card-projects-main">
              <img
                src="./images/screencapture-beauty-nj-blogs-all-blogs-2024-01-17-16_33_56.png"
                alt="Avatar"
                style={{ width: "100%" }}
              />
              <div className="container-projects-main">
                <h3>
                  <b>Beauty Ninja</b>
                </h3>
                <p>UX, CRO, SEO, Influencer Marketing, Affiliate Marketing</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div class="row-projects-main">
        <div class="column-projects-main">
          <Link className="link-projects-main" to="/sohl">
            <div className="card-projects-main">
              <img
                src="./images/sohl-home.png"
                alt="Avatar"
                style={{ width: "100%" }}
              />
              <div className="container-projects-main">
                <h3>
                  <b>SOHL</b>
                </h3>
                <p>UX/Integrated Marketing Communications</p>
              </div>
            </div>
          </Link>
        </div>
        <div class="column-projects-main">
          <Link className="link-projects-main" to="/nzhco">
            <div className="card-projects-main">
              <img
                src="./images/nzhoneyco-blog.png"
                alt="Avatar"
                style={{ width: "100%" }}
              />
              <div className="container-projects-main">
                <h3>
                  <b>NZ Honey Co.</b>
                </h3>
                <p>CRO, SEO Content Marketing</p>
              </div>
            </div>
          </Link>
        </div>
        <div class="column-projects-main">
          <Link className="link-projects-main" to="/thematic">
            <div className="card-projects-main">
              <img
                src="./images/measurement-marketing-process.png"
                alt="Avatar"
                style={{ width: "100%" }}
              />
              <div className="container-projects-main">
                <h3>
                  <b>Thematic</b>
                </h3>
                <p>Thematic Research & Growth Analytics</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="button-container-projects-main">
        <a href="/projects">
          <button className="nav-button-projects-main">See more</button>
        </a>
      </div>
    </>
  );
};

export default ProjectsSection;
