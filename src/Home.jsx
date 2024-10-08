import React, { useState } from "react";
import FloatingText from "./FloatingText";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
  const navigate = useNavigate();
  const [viewProjectsClicked, setViewProjectsClicked] = useState(false);

  const handleViewProjectsClick = () => {
    setViewProjectsClicked(true);
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
        <p className="subHdr">Hi! I'm Juni Ejere,</p>
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
