import React from "react";
import { Link } from "react-router-dom";
import "../style/Project.css";

// Images imported (assuming they're in the public/images folder)
import burgerImage from "../images/burger.png";
import airbnbImage from "../images/airbnb.png";
import zomatoImage from "../images/zomato.png";

const Project = () => {
  const projects = [
    {
      link: "https://hamzatal.github.io/burger/",
      image: burgerImage,
      name: "P.1 (Burger)",
    },
    {
      link: "https://hamzatal.github.io/Airbnb/",
      image: airbnbImage,
      name: "P.2 (Airbnb)",
    },
    {
      link: "https://hamzatal.github.io/zomato/",
      image: zomatoImage,
      name: "P.3 (Zomato)",
    },
  ];

  return (
    <div className="project-page">
      {/* Header Section */}
      <header className="header">
        <Link to="/" className="logo">
          <span style={{ color: "#00abf0" }}>H</span>amza.
        </Link>
        <nav className="navbar">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/about" className="">
            About Me
          </Link>
          <Link to="/myjourney" className="">
            My Journey
          </Link>
          <Link to="/project" className="active">
            My Project
          </Link>
          <Link to="/contact" className="">
            Contact Me!
          </Link>
        </nav>
      </header>

      {/* Projects Section */}
      <section className="project">
        <div className="boxes">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="box"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.image} alt={`Project ${index + 1}`} />
              <span>{project.name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
