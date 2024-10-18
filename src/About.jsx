import React from "react";
import FloatingText from "./FloatingText";
import Navbar from "./Navbar";
import "./bubbles.css";
export default function About() {
  return (
    <div className="aboutContainer">
      <Navbar />
      <FloatingText text="What's a Juni?" />
      <div className="projectContent aboutDiv">
        <div className="aboutBox">
          <h2 className="subHdr">Background</h2>
          {/* <img className="arrow" src="../images/chevron-svgrepo-com.svg" /> */}
          <p>
            I graduated May 2024 Summa Cum Laude with a degree in Computer
            Information Systems at St. Mary's University in San Antonio, Texas.
            Prior to this, I obtained Associate's degrees in Business and
            Biology from Seminole State College in Oklahoma. Alongside my
            academic pursuits, I actively engaged in various extra-curricular
            activities. I served as the president of the Black Student Union, a
            member of the Society of Women Engineers, and as a member of the
            soccer team at my university while maintaining a 3.9 GPA. I am
            currently employed as a Software Optimization Specialist at a local
            healthcare clinic. I am responsible for maintaining and optimizing
            the clinic's software systems, designing and developing custom
            software applications to address specific needs, implementing
            automation tools and systems to streamline workflows, transitioning
            previously paper-dominant tasks to digital patforms, as well as
            providing technical support to the staff.
          </p>
        </div>
        <div className="aboutBox">
          <h2 className="subHdr">Skillset</h2>
          {/* <img className="arrow" src="../images/chevron-svgrepo-com.svg" /> */}
          <p>
            {/* I am proficient in C/C++, Java, and experienced in designing
            normalized databases in MSSQL Server and SQLite. I also have
            experience utilizing the .NET framework to create a C# GUI that
            performs SQL queries. In one of my favorite projects, I developed a
            Python-like programming language using assembly language
            programming, complemented by a compiler designed in C++. Beyond the
            curriculum, I've self-studied Python, JavaScript, HTML, and CSS. */}
            {/* I am proficient in a wide range of technologies including C/C++,
            Java, C#, Python, JavaScript, ReactJS, React Native, HTML, CSS,
            SQLite, MSSQL Server, .NET, Flask, and database management systems.
            I have hands-on experience designing and optimizing user interfaces,
            developing full-stack applications, and utilizing frameworks like
            React Native Expo for mobile app development and Flask for web
            applications. One of my largest projects, Delivered Mobile App,
            built using React Native, leverages SQLite for cross-platform
            database management and addresses inefficiencies in university
            mailrooms by automating notifications and mail tracking. In another
            project, BuildMyPortfolio, I developed a web application with a
            ReactJS frontend and Python Flask backend, incorporating advanced
            web scraping and data analytics to provide users with insights into
            the most in-demand job skills. At my current role, I developed a
            Python automation script that increased data entry efficiency by
            95%, reducing the time spent from hours to seconds. I also led the
            design, development, and deployment of the business's website, and
            utilized Microsoft Graph PowerShell to configure and manage
            Microsoft 365 environments. I am also skilled in utilizing APIs,
            automating workflows with Python, and optimizing data processing for
            performance improvements. */}
            {/* I am proficient in a wide range of technologies including C/C++,
            Java, C#, Python, JavaScript, ReactJS, React Native, HTML, CSS,
            SQLite, MSSQL Server, .NET, Flask, and database design. My hands-on
            experience includes designing and optimizing user interfaces,
            developing full-stack applications, and working with frameworks like
            React Native Expo for mobile development and ReactJS or Flask for
            web applications. Some of my recent exploits in my current role
            include: developing Python automation scripts to increase efficiency
            of repetitive tasks, streamlining Microsoft 365 environments using
            Graph PowerShell, and leading the development and deployment of the
            business's website. I am adept at integrating REST APIs and
            optimizing data processing to improve performance in various
            applications. */}
            I am proficient in a wide range of technologies including C/C++,
            Java, C#, Python, JavaScript, ReactJS, React Native, HTML, CSS,
            SQLite, MSSQL Server, .NET, Flask, and database design. My hands-on
            experience includes designing and optimizing user interfaces,
            developing full-stack applications, and working with frameworks like
            React Native Expo for mobile development and ReactJS or Flask for
            web applications. In my current role, I have developed Python
            automation scripts to increase the efficiency of repetitive tasks,
            streamlined Microsoft 365 environments using Graph PowerShell, and
            led the development and deployment of the company's website. I am
            also skilled in integrating REST APIs and optimizing data processing
            to improve performance across various applications.
          </p>
        </div>
        <div className="aboutBox">
          <h2 className="subHdr">Objective</h2>
          {/* <object className="arrow" type="image/svg+xml" data="../images/chevron-svgrepo-com.svg"></object> */}
          <p>
            I am passionate about the endless possibilities that programming
            offers, ranging from enhancing the efficiency of simple tasks to
            developing software that can genuinely save lives. I have a huge
            love of learning and I am always eager to utilize my creative
            thinking and analytic skills to solve any problem with technology.
            Presently, I am actively seeking opportunities in Software
            Engineering/Development. I am excited to work with a team that
            aligns with my values of caring for people and is committed to
            making a positive impact in the world.
          </p>
        </div>
        <div
          className="buttonHolder"
          style={{
            display: "flex",
            margin: "10px",
            padding: "20px",
            justifyContent: "center",
            alignItems: "center",
            // width: "80%",
            columnGap: "20px",
            // border: "1px solid black",
          }}
        >
          <div className="button">Download Resume</div>
          <div className="button">View Github</div>
        </div>
      </div>
    </div>
  );
}
