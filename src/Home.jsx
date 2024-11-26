import React, { useState } from "react";
import FloatingText from "./FloatingText";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { s } from "framer-motion/client";

export default function Home() {
  const navigate = useNavigate();
  const [viewProjectsClicked, setViewProjectsClicked] = useState(false);
  const [infoClicked, setInfoClicked] = useState(false);

  const handleViewProjectsClick = () => {
    setViewProjectsClicked(true);
  };

  const toggleinfoClicked = () => {
    if (!infoClicked) {
      setInfoClicked(true);
    }

    setTimeout(() => {
      setInfoClicked(false);
    }, 2000);
  };

  return (
    <div className="container">
      {/* <div className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div> */}
      <Navbar />
      <div className="welcome">
        <div className="infoContainer">
          <div className="subHdr">Hi! I'm Juni Ejere,</div>
          <div className={`infoBox ${infoClicked ? "show" : ""}`}>
            <span
              onClick={toggleinfoClicked}
              className="material-symbols-outlined infoIcon"
            >
              info
            </span>

            <span className={`infoText ${infoClicked ? "show" : ""}`}>
              Hint: Pop the bubbles!
            </span>
          </div>
        </div>

        {/* <p className="hugeHdr">SOFTWARE ENGINEER</p> */}
        <FloatingText
          text="SOFTWARE ENGINEER"
          viewProjectsClicked={viewProjectsClicked}
          setViewProjectsClicked={setViewProjectsClicked}
          navigate={navigate}
        />
      </div>
      <div className="buttonContainer">
        <div className="button" onClick={handleViewProjectsClick}>
          View Projects
        </div>
      </div>
    </div>
  );
}
