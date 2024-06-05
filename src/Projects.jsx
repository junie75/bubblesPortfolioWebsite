import React from "react";
import "./bubbles.css";
import home from "./assets/home.png";
import eStoreDB from "./assets/eStoreDB.png";
import buildMyPortfolio from "./assets/buildMyPortfolio.png";
import dinoDetectors from "./assets/dinoDetectors.png";
import Bubbles from "./Bubbles";

export default function Projects() {
  const projects = {
    Delivered: {
      image: home,
      // description: "This is a project that was delivered",
    },
    BuildMyPortfolio: {
      image: buildMyPortfolio,
      // description: "This is a project that was delivered",
    },
    "E-Store Database": {
      image: eStoreDB,
      // description: "This is a project that was delivered",
    },
    "Dino Detectors": {
      image: dinoDetectors,
      // description: "This is a project that was delivered",
    },
  };

  const displayProjects = () => {
    return Object.keys(projects).map((project) => {
      return (
        <Bubbles
          key={project}
          project={project}
          image={projects[project].image}
        />
      );
    });
  };
  return <div className="projectsContainer">{displayProjects()}</div>;
}
