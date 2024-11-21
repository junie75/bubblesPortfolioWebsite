import React, { useState } from "react";
import "./bubbles.css";
import delivered from "./delivered2.webp";
import eStoreDB from "./eStoreDB2.webp";
import buildMyPortfolio from "./buildMyPortfolio2.webp";
import dinoDetectors from "./dinoDetectors2.webp";
import ewcImage from "./EWC.webp";
import Navbar from "./Navbar";
import bubblePop2 from "./assets/bubblePop2.mp4";
import { Link, useNavigate } from "react-router-dom";
import { a } from "framer-motion/client";

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

  const navigate = useNavigate();

  const handleBubbleClick = (event, nextLink) => {
    const bubble = event.currentTarget; //handle the bubble div (current target refers to the element to which div handler is attached)
    // if the bubble is not already popped and the bubble is not a space apply the pop animation
    // if (bubble.style.opacity != "0" && bubble.textContent != "\u00A0") {
    new Audio(bubblePop2).play();

    bubble.style.animation = `pop 80ms cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards`;
    console.log(bubble.style.animation);

    // set the opacity of the bubble to 0 after the pop animation
    setTimeout(() => {
      bubble.style.opacity = "0";
      bubble.style.cursor = "default";
    }, 300);

    setTimeout(() => {
      navigate(nextLink);
    }, 800);

    // }
  };

  const displayProjects = () => {
    return projects.map((project, index) => {
      return (
        // <Bubbles
        //   key={index}
        //   index={index}
        //   project={project.projectName}
        //   image={project.image}
        // />
        // <a href={project.link} style={{ textDecoration: "none" }}>
        <div
          className="projectDiv bubbles float"
          key={index}
          onClick={(event) => handleBubbleClick(event, project.link)}
        >
          <div className="imgContainer">
            <img src={project.image} alt="project" className="projectImage" />
          </div>

          {/* <div className="projectDesc">
              <div className="projectInfo">
                <h3>{project.projectName}</h3>
                <p>{project.description}</p>
              </div>

              {/* <div className="bubbleBtn">
              <Link to={project.link}>View Project</Link>
            </div> /}
            </div> */}
        </div>
        // </a>
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
