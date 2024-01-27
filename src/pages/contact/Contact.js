import React from 'react'
import './Contact.css';

const Contact = () => {
  return ( 
    <div className="contact-container">
         <div className="contact-text">
    <h1>Let's chat</h1>
    <p>Got a startup idea and need some help with rollout? Or maybe an app idea you want to bring to life? Let's chat about how I can help.</p>
    </div>
<form action="">
<div class="contact-row">
      <div class="col-25">
        
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      </div>
    </div>
    <div class="contact-row">
      <div class="col-25">
        
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
      </div>
    </div>
    <div class="contact-row">
      <div class="col-25">
        
      </div>
      <div class="col-75">
        <select id="country" name="country">
          <option value="australia">New Zealand</option>
          <option value="canada">Australia</option>
          <option value="usa">USA</option>
        </select>
      </div>
    </div>
    <div class="contact-row">
      <div class="col-25">
        
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Tell me about your project..." style={{height: "200px"}}></textarea>
      </div>
    </div>
    <div class="contact-row">
      <input type="submit" value="Submit" />
        </div>
      </form>
     
      </div>
  )
}

export default Contact