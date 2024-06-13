import React, { useState } from "react";
import "./bubbles.css";
import home from "./assets/home.png";
import eStoreDB from "./assets/eStoreDB.png";
import buildMyPortfolio from "./assets/buildMyPortfolio.png";
import dinoDetectors from "./assets/dinoDetectors.png";
// import Bubbles from "./Bubbles";
import Bubbles from "./Bubbles2";

export default function Projects() {
  const projects = [
    {
      projectName: "Delivered",
      image: home,
      // description: "This is a project that was delivered",
    },
    {
      projectName: "BuildMyPortfolio",
      image: buildMyPortfolio,
      // description: "This is a project that was delivered",
    },
    {
      projectName: "E-Store Database",
      image: eStoreDB,
      // description: "This is a project that was delivered",
    },
    {
      projectName: "Dino Detectors",
      image: dinoDetectors,
      // description: "This is a project that was delivered",
    },
    {
      projectName: "Delivered",
      image: home,
      // description: "This is a project that was delivered",
    },
    {
      projectName: "BuildMyPortfolio",
      image: buildMyPortfolio,
      // description: "This is a project that was delivered",
    },
    {
      projectName: "E-Store Database",
      image: eStoreDB,
      // description: "This is a project that was delivered",
    },
    {
      projectName: "Dino Detectors",
      image: dinoDetectors,
      // description: "This is a project that was delivered",
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
        <Bubbles
          key={index}
          index={index}
          project={project.projectName}
          image={project.image}
        />
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
