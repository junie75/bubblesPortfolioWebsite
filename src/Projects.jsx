import React, { useState } from "react";
import "./bubbles.css";
import delivered from "./assets/delivered2.png";
import eStoreDB from "./assets/eStoreDB2.png";
import buildMyPortfolio from "./assets/buildMyPortfolio2.png";
import dinoDetectors from "./assets/dinoDetectors2.png";
import ewcImage from "./assets/EWC.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
// import Bubbles from "./Bubbles";
// import Bubbles from "./Bubbles2";

export default function Projects() {
  const projects = [
    {
      projectName: "Wound Care Website",
      image: ewcImage,
      description:
        "A sleek, user-friendly platform designed and deployed to streamline patient interactions and showcase the expert services of a local wound care clinic.",
      link: "/businessWebsite",
    },
    {
      projectName: "Delivered",
      image: delivered,
      description:
        "A mobile app designed to notify university students of mail arrivals and enhance the efficiency of university mailrooms.",
      link: "/delivered",
    },

    {
      projectName: "BuildMyPortfolio",
      image: buildMyPortfolio,
      description:
        "A web application to help users identify key job skills by scraping and analyzing recent job postings.",
      link: "/buildMyPortfolio",
    },
    {
      projectName: "E-Store Database",
      image: eStoreDB,
      description:
        "A comprehensive database designed to manage an e-commerce store's inventory and sales data with a user-friendly GUI for database operations",
      link: "/eStoreDB",
    },
    {
      projectName: "Dino Detectors",
      image: dinoDetectors,
      description:
        "A modern take on the classic Skannerz toy where users can scan real-life barcodes to collect a diverse range of dinosaurs.",
      link: "/dinoDetectors",
    },
  ];

  const [currentProject, setCurrentProject] = useState(projects[0]);

  // const displayProjects = () => {
  //   return Object.keys(projects).map((project) => {
  //     return (
  //       <Bubbles
  //         key={currentProject}
  //         project={currentProject.projectName}
  //         image={currentProject.image}
  //       />
  //     );
  //   });
  // };

  const displayProjects = () => {
    return projects.map((project, index) => {
      return (
        // <Bubbles
        //   key={index}
        //   index={index}
        //   project={project.projectName}
        //   image={project.image}
        // />
        <div className="projectDiv bubbleBtn" key={index}>
          <div className="imgContainer">
            <img src={project.image} alt="project" className="projectImage" />
          </div>

          <div className="projectDesc">
            <div className="projectInfo">
              <h3>{project.projectName}</h3>
              <p>{project.description}</p>
            </div>

            <div className="bubbleBtn">
              <Link to={project.link}>View Project</Link>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <Navbar />
      <div className="projectsContainer">
        {/* <div className="bubbleDisplay"> */}
        {/* <div className={["button", "prev"]} /> */}
        {displayProjects()}
        {/* <div className={["button", "next"]} /> */}
      </div>
    </div>
  );

  // return (
  //   <div className="projectsContainer">
  //     <Bubbles
  //       key={currentProject.projectName}
  //       project={currentProject.projectName}
  //       image={currentProject.image}
  //     />
  //   </div>
  // );
}
