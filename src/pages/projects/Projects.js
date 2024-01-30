import React from 'react'
import ProjectsSection from '../../components/projects-section/projectsSection'
import { Link } from 'react-router-dom'
import './Projects.css'

const Projects = () => {
  return (
    <div className="grid-container-projects">
    <div class="row-projects">
      <h1 className="title-projects">My Projects</h1>
      <p className="sub-text-projects">
        Explore the projects listed below to witness my skills in action
      </p>

      <div class="column-projects">
        <Link className="link-projects" to="/a2xcase">
          <div className="card-projects">
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

      <div class="column-projects">
        <Link className="link-projects" to="/dosecase">
          <div className="card-projects">
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
      <div class="column-projects">
        <Link className="link-projects" to="/beautyninja">
          <div className="card-projects">
            <img
              src="screencapture-beauty-nj-blogs-all-blogs-2024-01-17-16_33_56.png"
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="container-projects">
              <h4>
                <b>Beauty Ninja</b>
              </h4>
              <p>UX, CRO, SEO, Influencer Marketing, Affiliate Marketing</p>
            </div>
          </div>
        </Link>
      </div>
    </div>

    <div class="row-projects">
      <div class="column-projects">
        <Link className="link-projects" to="/sohl">
          <div className="card-projects">
            <img src="sohl-home.png" alt="Avatar" style={{ width: "100%" }} />
            <div className="container-projects">
              <h4>
                <b>SOHL</b>
              </h4>
              <p>UX/Integrated Marketing Communications</p>
            </div>
          </div>
        </Link>
      </div>
      <div class="column-projects">
        <Link className="link-projects" to="/nzhco">
          <div className="card-projects">
            <img
              src="nzhoneyco-blog.png"
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="container-projects">
              <h4>
                <b>NZ Honey Co.</b>
              </h4>
              <p>Thematic Research & Growth Analytics</p>
            </div>
          </div>
        </Link>
      </div>
      <div class="column-projects">
        <Link className="link-projects" to="/thematic">
          <div className="card-projects">
            <img
              src="measurement-marketing-process.png"
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="container-projects">
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
      
       
      
    </div>
    <div class="row-projects">
      <div class="column-projects">
        <Link className="link-projects" to="/vari">
          <div className="card-projects">
            <img src="product-details-vari.png" alt="Avatar" style={{ width: "100%" }} />
            <div className="container-projects">
              <h4>
                <b>Vari</b>
              </h4>
              <p>UX, Media Buying, SEO, CRO</p>
            </div>
          </div>
        </Link>
      </div>
      <div class="column-projects">
        <Link className="link-projects" to="/kiwimall">
          <div className="card-projects">
            <img
              src="ecommerce-home.png"
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="container-projects">
              <h4>
                <b>Kiwi Mall</b>
              </h4>
              <p>MERN Stack Project</p>
            </div>
          </div>
        </Link>
      </div>
      <div class="column-projects">
        <Link className="link-projects" to="/dolphinpacific">
          <div className="card-projects">
            <img
              src="dolphin-pacific-research.png"
              alt="Avatar"
              style={{ width: "100%", height: "350px" }}
            />
            <div className="container-projects">
              <h4>
                <b>Dolphin Pacific</b>
              </h4>
              <p>UX, CRO, SEO, WordPress Dev, Content Marketing, Affiliate Marketing</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <div className="button-container-projects">
      
       
      
    </div>
  </div>
  )
}

export default Projects