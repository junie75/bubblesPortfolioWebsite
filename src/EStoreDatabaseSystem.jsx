import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./ProjectPages.css";
import ImageSlider from "./ImageSlider";
import eStoreImages from "./esdsCarousel";

export default function EStoreDatabaseSystem() {
  const [currentImage, setCurrentImage] = useState(eStoreImages[0]);
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
        <div className="projectTitle">E-Store Database System</div>
        <ImageSlider
          images={eStoreImages}
          orientation="horizontal"
          setCurrentImage={setCurrentImage}
          toggleModal={toggleModal}
        />
        {modalOpen && sliderModal(currentImage)}
        <div className="projectContent">
          <section>
            <h1>Overview</h1>
            <p>
              The eStore Database System is a Database Management GUI platform
              developed using Visual Studio as a .NET Framework console
              application. The system is designed to provide a user-friendly
              interface for managing databases, executing SQL queries, and
              performing various database-related tasks, specifically catering
              to the needs of a small online shop owner. The owner will have
              admin privileges to manage database operations, ensuring data
              integrity through verification via the graphical user interface.
            </p>
          </section>
          <section>
            <h1>The Problem</h1>
            <p>
              Small online shop owners often face challenges in managing their
              databases efficiently. Without a user-friendly interface, they may
              struggle to perform essential tasks such as storing, retrieving,
              and updating information. This can lead to inefficiencies, data
              errors, and a lack of insight into customer and product
              information.
            </p>
          </section>
          <section>
            <h1>Solution & Key Features</h1>
            <p>
              The eStore Database System addresses these challenges with key
              features that include an intuitive graphical user interface
              simplifying database management tasks, the ability to execute SQL
              queries directly within the application for efficient data
              retrieval and manipulation, comprehensive tracking of customer
              information, product details, and transaction/shipment history, as
              well as admin functionality to manage database operations
              securely, including login and password change options.
            </p>
          </section>
          <section>
            <h1>Technologies Used</h1>
            <p>
              The eStore Database System was developed using Visual Studio,
              specifically version 17.3, and managed through Microsoft SQL
              Server Management Studio (SSMS) version 19.1. The application
              utilizes the Microsoft .NET Framework, specifically version 4.8,
              to ensure compatibility and performance.
            </p>
          </section>
        </div>
        <div className="btnContainer">
          <div className="button">
            <Link
              to={"https://github.com/junie75/eStoreDatabaseSystem"}
              target="blank"
            >
              View Repository
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
