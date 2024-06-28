import React, { useState } from "react";
import "./bubbles.css";
import delivered from "./assets/delivered2.png";
import eStoreDB from "./assets/eStoreDB2.png";
import buildMyPortfolio from "./assets/buildMyPortfolio2.png";
import dinoDetectors from "./assets/dinoDetectors2.png";
// import Bubbles from "./Bubbles";
// import Bubbles from "./Bubbles2";

export default function Projects() {
  const projects = [
    {
      projectName: "Delivered",
      image: delivered,
      description: "This is a project that was delivered",
    },
    {
      projectName: "BuildMyPortfolio",
      image: buildMyPortfolio,
      description: "This is a project that was delivered",
    },
    {
      projectName: "E-Store Database",
      image: eStoreDB,
      description: "This is a project that was delivered",
    },
    {
      projectName: "Dino Detectors",
      image: dinoDetectors,
      description: "This is a project that was delivered",
    },
    {
      projectName: "Delivered",
      image: delivered,
      description: "This is a project that was delivered",
    },
    {
      projectName: "BuildMyPortfolio",
      image: buildMyPortfolio,
      description: "This is a project that was delivered",
    },
    {
      projectName: "E-Store Database",
      image: eStoreDB,
      description: "This is a project that was delivered",
    },
    {
      projectName: "Dino Detectors",
      image: dinoDetectors,
      description: "This is a project that was delivered",
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
        <div className="projectDiv" key={index}>
          <div className="imgContainer">
            <img src={project.image} alt="project" className="projectImage" />
          </div>

          <div className="projectDesc">
            <div className="projectInfo">
              <h3>{project.projectName}</h3>
              <p>{project.description}</p>
            </div>

            <div className="bubbleBtn">View Project</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="projectsContainer">
      {/* <div className="bubbleDisplay"> */}
      {/* <div className={["button", "prev"]} /> */}
      {displayProjects()}
      {/* <div className={["button", "next"]} /> */}
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
