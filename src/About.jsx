import React from "react";
import FloatingText from "./FloatingText";
import Navbar from "./Navbar";
import "./bubbles.css";
export default function About() {
  return (
    <div className="aboutContainer">
      <Navbar />
      <FloatingText text="What's a Juni?" />
      <div className="aboutDiv">
        <div className="aboutBox">
          <h2 className="subHdr">Background</h2>
          {/* <img className="arrow" src="../images/chevron-svgrepo-com.svg" /> */}
          <p>
            I am a senior Computer Information Systems major at St. Mary's
            University in San Antonio, Texas. Prior to this, I obtained
            Associate's degrees in Business and Biology from Seminole State
            College in Oklahoma. Alongside my academic pursuits, I actively
            engage in various extra-curricular activities. I serve as the
            president of the Black Student Union, am a member of the Society of
            Women Engineers, and contribute as a member of the soccer team at my
            university. I anticipate graduating in May 2024.
          </p>
        </div>
        <div className="aboutBox">
          <h2 className="subHdr">Skillset</h2>
          {/* <img className="arrow" src="../images/chevron-svgrepo-com.svg" /> */}
          <p>
            I am proficient in C/C++, Java, and experienced in designing
            normalized databases in MSSQL Server and SQLite. I also have
            experience utilizing the .NET framework to create a C# GUI that
            performs SQL queries. In one of my favorite projects, I developed a
            Python-like programming language using assembly language
            programming, complemented by a compiler designed in C++. Beyond the
            curriculum, I've self-studied Python, JavaScript, HTML, and CSS.
          </p>
        </div>
        <div className="aboutBox">
          <h2 className="subHdr">Objective</h2>
          {/* <object className="arrow" type="image/svg+xml" data="../images/chevron-svgrepo-com.svg"></object> */}
          <p>
            I am passionate about the possibilities that programming offers in
            problem-solving, ranging from enhancing the efficiency of simple
            tasks to developing software that can genuinely save lives.
            Presently, I am actively seeking opportunities in Software
            Engineering/Development. My objective is to secure a position within
            a company that is committed to making a positive impact. I aspire to
            work for an organization that shares my values of caring for people
            and aims to make a meaningful difference in the world.
          </p>
        </div>
      </div>
    </div>
  );
}
