import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import headshot from "./assets/headshot4.webp";
import github from "./assets/github (1).webp";
import linkedin from "./assets/linkedin.webp";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";

export default function Contact() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState("");

  // Function to send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    // if (!form.current.checkValidity()) {
    //   setMessageStatus("Please fill out all fields before submitting.");
    //   return;
    // } else {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          setMessageStatus("Your message has been sent. ");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log("Failed...", error.text);
          setMessageStatus("Failed to send message. Please try again later.");
        }
      );
    // }
  };

  // Function to generate a random contact number
  const generateContactNumber = () => {
    return (Math.random() * 100000) | 0; // Bitwise OR operator to convert to integer
  };

  const closeModal = () => setMessageStatus(null);

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
              <a href="https://github.com/junie75" target="_blank">
                <img className="smallIcon" src={github} alt="github icon" />
              </a>
              {/* linkedin icon */}
              <a href="https://linkedin.com/in/juni-ejere" target="_blank">
                <img className="smallIcon" src={linkedin} alt="linkedin icon" />
              </a>
            </div>
            <a href="/resumeFall24v2.pdf" download>
              <div className="button">Download resume</div>
            </a>
          </div>
          <div className="contactForm">
            <h1>Contact me</h1>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="hidden"
                name="contact_number"
                value={generateContactNumber()}
              />
              <label>Name</label>
              <input type="text" name="user_name" required />
              <label>Email</label>
              <input type="email" name="user_email" required />
              <label>Message</label>
              <textarea name="message" id="" rows="5" required></textarea>
              <button type="submit" className="button">
                Submit
              </button>
            </form>
            {/* Display the modal if the messageStatus is not null */}
            {messageStatus && (
              <Modal message={messageStatus} onClose={closeModal} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
