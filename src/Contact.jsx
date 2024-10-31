import React from "react";
import Navbar from "./Navbar";
import headshot from "./assets/headshot4.JPG";
import github from "./assets/github (1).png";
import linkedin from "./assets/linkedin.png";

export default function Contact() {
  return (
    <div className="container">
      <Navbar />
      <div className="contactPage">
        <section>
          <div className="contactCard">
            <div className="photo">
              <img src={headshot} alt="Juni Ejere" />
            </div>
            <div className="contactInfo">
              <h2>Juni Ejere</h2>
              <p>Full Stack Software Engineer</p>
              <p>Email: juni.ejere75@gmail.com</p>
            </div>

            <div className="links">
              {/* github icon */}
              <img className="smallIcon" src={github} alt="github icon" />
              {/* linkedin icon */}
              <img className="smallIcon" src={linkedin} alt="linkedin icon" />
            </div>
            <div className="button">Download resume</div>
          </div>
          <div className="contactForm">
            <h1>Message</h1>
            <form>
              <label for="name">Name</label>
              <input type="text" />
              <label for="email">Email</label>
              <input type="email" />
              <label for="message">Message</label>
              <textarea name="message" id="" rows="5"></textarea>
              <button className="button">Submit</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
