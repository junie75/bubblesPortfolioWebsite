import React, { useState } from "react";

import Navbar from "./Navbar";
import "./ProjectPages.css";
import { Link } from "react-router-dom";
import dlvrdImages from "./dlvrdCarousel.js";
import ImageSlider from "./ImageSlider";

export default function DeliveredApp() {
  const [currentImage, setCurrentImage] = useState(dlvrdImages[0]);
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
      {/* <div className="toggleButton" onClick={viewDemo}>
        View Demo
      </div>
      {toggleSnack && (
        <div className="expoSnack">
          <SnackEmbed key={toggleSnack} />
        </div>
      )} */}
      {/* <div className="expoSnack">
        <SnackEmbed key={toggleSnack} />
      </div> */}
      <div className="projectPage">
        <div className="projectTitle">Delivered App</div>
        {/* <div className="projectVid">Video</div> */}
        <ImageSlider
          images={dlvrdImages}
          setCurrentImage={setCurrentImage}
          toggleModal={toggleModal}
        />
        {modalOpen && sliderModal(currentImage)}
        <div className="projectContent">
          <section>
            <h1>Overview</h1>
            <p>
              Delivered is a mobile application developed to address the
              inefficiencies of traditional mailrooms in university settings,
              specifically at St. Mary’s University. The app streamlines the
              process of notifying students and faculty when their packages or
              letters arrive, offering a comprehensive solution for mail
              management. By providing mobile notifications and access to
              mailroom information in one convenient location, Delivered ensures
              that users are well-informed and optimize sthe workflow of the
              mailroom staff, allowing them to efficiently manage mail
              deliveries and resolve issues.
            </p>
          </section>
          <section>
            <h1>The Problem</h1>
            <p>
              Before Delivered, the university’s mailroom had limited systems in
              place to notify students and faculty when mail had been delivered.
              Students, especially those living on campus, were often unaware
              when important letters arrived, and helpful information like
              mailroom hours or dorm mailbox locations was scattered across
              different resources. This lack of a centralized, user-friendly
              system created frustration for both students and mailroom staff.
            </p>
          </section>
          <section>
            <h1>Solution & Key features</h1>
            <p>
              Delivered offers a dual interface—one for users receiving mail and
              one for the mailroom staff. Through this app, students and faculty
              receive notifications when their mail arrives, complete with
              details on where and how to collect it. For the mailroom staff,
              the app simplifies tasks like scanning packages, notifying
              recipients, and managing mail storage. Key features include:
            </p>
            <ul>
              <li>
                Notifications sent to recipients when a package or letter is
                retrieved and ready for pick-up.
              </li>
              <li>
                A centralized hub for mailroom information, such as hours of
                operation, maps, and dorm mailbox addresses.
              </li>
              <li>
                An interactive map displaying the locations of all campus
                mailrooms.
              </li>
              <li>
                A help ticket system for users to report late or missing
                packages, which mailroom staff can track and resolve.
              </li>
              <li>
                A package storage tracking system that alerts staff when items
                near their maximum storage duration.
              </li>
            </ul>
          </section>
          <section>
            <h1>Technologies Used</h1>
            <p>
              Built with React Native Expo and utilizing SQLite for database
              management, Delivered is designed to be cross-platform and
              accessible for both iOS and Android users. The app was tested on
              both operating systems, ensuring functionality and user experience
              across devices.
            </p>
          </section>
        </div>
        {/* <div className="projectTechnologies">Technologies</div> */}
        <div className="btnContainer">
          <div className="button">
            <Link
              to={"https://snack.expo.dev/@junie75/delivered?platform=ios"}
              target="blank"
            >
              View Demo
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
