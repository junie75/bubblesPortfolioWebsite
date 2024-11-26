import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./ProjectPages.css";
import ewcImages from "./ewcCarousel";
import ImageSlider from "./ImageSlider";

export default function EWC() {
  const [currentImage, setCurrentImage] = useState(ewcImages[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    console.log("modalOpen: ", modalOpen);
  };

  const sliderModal = () => {
    return (
      <div className="sliderModal">
        <div className="modalImage" onClick={toggleModal}>
          {console.log("currentImage: ", currentImage)}
          <img src={currentImage} alt="modalImage" />
        </div>
      </div>
    );
  };
  return (
    <div className="projectPageContainer">
      <Navbar />
      <div className="projectPage">
        <div className="projectTitle">Wound Care Website</div>
        <ImageSlider
          images={ewcImages}
          orientation="horizontal"
          setCurrentImage={setCurrentImage}
          toggleModal={toggleModal}
        />
        {modalOpen && sliderModal(currentImage)}
        <div className="projectContent">
          <section>
            <h1>Overview</h1>
            <p>
              This product is a comprehensive online platform designed and
              developed for Ejere Wound Care & Hyperbaric Oxygen Therapy. The
              website was created to provide essential information about the
              client's services and to allow potential clients to book
              appointments. The website features a clean and professional design
              that is easy to navigate.
            </p>
          </section>
          <section>
            <h1>The Problem</h1>
            <p>
              Before the website launch, the clinic faced difficulties in
              reaching potential patients and providing them with timely
              information about services. Patients had limited access to
              essential resources, such as intake forms and a patient portal.
            </p>
          </section>
          <section>
            <h1>Solution & Key features</h1>
            <p>
              The newly designed website serves as a central hub for all
              clinic-related information, enabling easy navigation to services,
              contact details, and resources. It streamlines the process for
              patients to request intake forms and access their patient portal,
              enhancing overall patient experience. Key features include:
            </p>
            <ul>
              <li>
                An intuitive and mobile-responsive layout with clear links to
                all major pages
              </li>
              <li>
                A scrollable Google Maps iframe that shows the clinic's exact
                location, with a convenient 'Get Directions' link.
              </li>
              <li>
                An interactive pop-up information widget with a shake animation
                that captures the visitor's attention, stores and evaluates if
                the widget has been opened in the current session, and expands
                to show essential contact icons when clicked.
              </li>
              <li>
                Optimized for performance, accessibility, SEO and adheres to
                best practices in web development
              </li>
            </ul>
          </section>
          <section>
            <h1>Technologies Used</h1>
            <p>
              Built with React.js and deployed on Netlify, ejerewoundcare.com is
              designed to provide a seamless user experience across all devices.
              The website leverages modern web technologies to ensure fast
              loading times and responsive design. It incorporates a Google Maps
              iframe for location display and an interactive pop-up feature to
              enhance user engagement. Rigorous testing was conducted to
              optimize performance, accessibility, and SEO, resulting in a site
              that meets high standards for both usability and functionality.
            </p>
          </section>
        </div>
        <div className="btnContainer">
          <div className="button">
            <Link to={"https://ejerewoundcare.com"} target="blank">
              View Website
            </Link>
          </div>
          <Link to="/projects" className="backBtn">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
