import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./ProjectPages.css";
import ImageSlider from "./ImageSlider";
// import { motion } from "framer-motion";
import ddImages from "./ddCarousel";

const DinoDetectors = () => {
  return (
    <div className="projectPageContainer">
      <Navbar />
      <div className="projectPage">
        <div className="projectTitle">Dino Detectors</div>
        <ImageSlider images={ddImages} />
        <div className="projectContent">
          <section>
            <h1>Overview</h1>
            <p>
              Dino Detectors is a web application inspired by a toy called
              Skannerz, released in 2000. This project was the result of a group
              of four developers who attended RowdyHacks Hackathon hosted by
              UTSA in 2024. Our team built on the concept of scanning barcodes
              and created a web app where users can discover and capture
              dinosaurs. When a user scans a barcode, a dinosaur may appear,
              which they can capture and store in their inventory. The app also
              features a Dinopedia, where users can learn more about the
              dinosaurs they’ve collected.
            </p>
          </section>

          <section>
            <h1>The Problem</h1>
            <p>
              The primary challenge we wanted to address was the integration of
              real-time barcode scanning into a fun and educational experience.
              Inspired by the nostalgic concept of Skannerz, we aimed to create
              a modern take where users could explore a virtual world of
              dinosaurs. Additionally, we faced technical challenges, such as
              making the barcode scanner reliable and creating a user-friendly
              interface for capturing and displaying dinosaurs.
            </p>
          </section>

          <section>
            <h1>Solution & Key Features</h1>
            <p>
              Dino Detectors solves these problems by providing users with an
              engaging and interactive experience where they can scan barcodes
              to capture dinosaurs and learn about them. Key features include:
            </p>
            <ul>
              <li>
                Real-time barcode scanning: The app uses the QuaggaJS and
                MediaDevices API to allow users to scan barcodes with their
                device’s camera. I worked primarily on this feature, integrating
                the MediaDevices API with JavaScript using the `getUserMedia`
                function for the first time. I also implemented the backend
                functionality in Python Flask to process the barcode data
                received from the front-end, and perform the calculations to
                decide which dinosaur the user would receive based on it's
                rarity.
              </li>
              {/* <li>
                Dinosaur capture and inventory: When a barcode is scanned, a
                dinosaur may appear, and users can capture and view it in their
                inventory.
              </li> */}
              <li>
                Dinopedia: A detailed page where users can explore the dinosaurs
                they’ve collected and learn more about their traits.
              </li>
              <li>
                Smooth navigation: We focused on creating an intuitive and
                seamless user experience with clear navigation between pages. I
                contributed by editing the UI for the scanner page, ensuring it
                was user-friendly and integrated well with the barcode scanning
                functionality.
              </li>
            </ul>
          </section>

          <section>
            <h1>Technologies Used</h1>
            <p>Dino Detectors was built using a variety of technologies:</p>
            <ul>
              <li>
                Frontend: HTML, CSS, Bootstrap, and JavaScript for creating an
                interactive and responsive user interface.
              </li>
              <li>
                Backend: Flask, a lightweight Python web framework, to handle
                server-side logic and API integration. I implemented the backend
                functionality to process barcodes from the scanner and interact
                with the front-end.
              </li>
              <li>
                Database: MySQL hosted on PlanetScale, used for storing user
                data, such as their captured dinosaurs and Dinopedia entries.
              </li>
              <li>
                Barcode Scanning: QuaggaJS and the MediaDevicesAPI for real-time
                camera input and barcode recognition. I worked closely with
                these technologies to ensure the scanner's accuracy and
                performance.
              </li>
              <li>
                Deployment: The app is hosted on Render for development and
                testing.
              </li>
            </ul>
          </section>
          <div className="btnContainer">
            <div className="button">
              <Link to="https://github.com/junie75/Rowdy-Hacks" target="_blank">
                View Repository
              </Link>
            </div>
            <Link to="/projects" className="backBtn">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoDetectors;
