import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";

const fontStyles = {color: '#d3d3d3', fontSize: '40px'}

const Footer = () => {
  return (
    <div className="footer">
        <h2>Check out my socials</h2>
        <div className="socials-block"><FaLinkedin style={fontStyles}/></div>
        <p>Cameron White web dev and marketing expert 2024</p>
        </div>

        
  )
}

export default Footer