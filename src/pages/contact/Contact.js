import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container-contact">
      <div style={{ textAlign: "center" }}>
        <h2>Let's chat</h2>
        <p>
          Got an app idea you want to build? Or maybe a marketing campaign?
          Let's chat.
        </p>
      </div>
      <div className="row-contact">
        <div className="column-contact">
          <img
            src="./images/digital-marketing (2).png"
            style={{ width: "50%" }}
            alt="digital-marketing-web"
          />
        </div>
        <div className="column-contact">
          <form action="">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <label htmlFor="country">Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "170px" }}
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
