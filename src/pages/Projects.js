import React from 'react'
import ProjectsSection from '../components/projects-section/projectsSection'
import { Link } from 'react-router-dom'

const Projects = () => {
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
        </div>
        <div class="column">
          <div className="card">
            <img
              src="screencapture-beauty-nj-blogs-all-blogs-2024-01-17-16_33_56.png"
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
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
        </div>
        <div class="column">
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
        </div>
        <div class="column">
          <div className="card">
            <img
              src="screencapture-beauty-nj-blogs-all-blogs-2024-01-17-16_33_56.png"
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Projects