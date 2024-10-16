import React from "react";
import Navbar from "./Navbar";
import "./ProjectPages.css";
import { Link } from "react-router-dom";
import bmpImages from "./bmpCarousel";
import ImageSlider from "./ImageSlider";

export default function BuildMyPortfolio() {
  return (
    <div className="projectPageContainer">
      <Navbar />
      <div className="projectPage">
        <div className="projectTitle">BuildMyPortfolio App</div>
        <ImageSlider images={bmpImages} orientation="horizontal" />
        <div className="projectContent">
          <section>
            <h1>Overview</h1>
            <p>
              BuildMyPortfolio is a web application developed to address the
              frustrations of feeling underqualified in job applications. It
              allows users to input their “dream job” and scrapes a job posting
              website (TimesJobs.com) to retrieve the most desired skills for
              that role. The project provides users with a list of top skills,
              descriptions for each skill, and analytics on how frequently these
              skills are mentioned and the percentage of employers that seek
              them.
            </p>
          </section>

          <section>
            <h1>The Problem</h1>
            <p>
              The idea for BuildMyPortfolio stemmed from my own struggles of
              feeling underqualified when applying for jobs. I found that many
              job postings listed "preferred" skills that would vary from
              company to company, leaving me feeling unprepared and unsure of
              what to focus on. This project was designed to give users an easy
              way to understand what skills are in demand for their dream job by
              analyzing job postings and displaying the most relevant
              qualifications.
            </p>
          </section>

          <section>
            <h1>Solution & Key Features</h1>
            <p>
              BuildMyPortfolio tackles the problem by providing a personalized
              skill analysis for any job title. By using a Python-based web
              scraper, the app gathers job data from TimesJobs.com and
              identifies the top skills required. The app then displays the
              following key features:
            </p>
            <ul>
              <li>
                Real-time insights into the most frequently mentioned skills for
                any job title.
              </li>
              <li>
                Skill descriptions fetched from external APIs, allowing users to
                understand what each skill entails.
              </li>
              <li>
                Detailed analytics, including the percentage of employers
                seeking specific skills and their relative importance.
              </li>
              <li>
                Backend optimizations to ensure efficient scraping and data
                analysis, minimizing load times.
              </li>
            </ul>
          </section>

          <section>
            <h1>Development Challenges & Optimizations</h1>
            <p>
              One of the significant challenges I faced during development was
              the slow load times caused by the large volume of data being
              processed. Initially, my web scraper made too many requests to the
              server because TimesJobs.com returned only a small number of posts
              per page. I resolved this by modifying the URL to retrieve a
              larger number of job postings in a single request. Additionally, I
              implemented parallel processing and reduced the amount of data
              being analyzed at once, cutting down the round-trip time by 75%.
            </p>
            <p>
              I also used Python's cProfile tool to identify bottlenecks in my
              code and made several key optimizations, including decreasing the
              number of HTTP requests and improving the efficiency of data
              retrieval and analysis. These changes significantly improved
              performance, allowing the application to handle large amounts of
              data in a more efficient manner.
            </p>
          </section>

          <section>
            <h1>Technologies Used</h1>
            <p>
              BuildMyPortfolio was built using ReactJS on the frontend and
              Python Flask for the backend. The web scraper is designed to
              utilize parallel processing for fetching and extracting skills
              from job posting, then uses Python's Numpy and Pandas libraries
              for data analysis. The backend communicates with the frontend by
              creating endpoints that handle requests, process data, and send
              relevant responses back to the client.
            </p>
          </section>
        </div>
        <div className="btnContainer">
          <div className="button">
            <Link
              to={"https://buildmyportfolio-cb11632f5185.herokuapp.com"}
              target="blank"
            >
              View Project
            </Link>
          </div>
          <Link to="/projects" className="backBtn">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
