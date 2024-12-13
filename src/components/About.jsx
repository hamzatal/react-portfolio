import React from 'react';
import { Link } from 'react-router-dom';
import '../style/About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <Link to="/" className="about-logo">
          <span style={{color: '#00abf0'}}>H</span>amza.
        </Link>
        <nav className="about-navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link active-link">About Me</Link>
          <Link to="/myjourney" className="nav-link">My Journey</Link>
          <Link to="/project" className="nav-link">My Project</Link>
          <Link to="/contact" className="nav-link">Contact Me!</Link>
        </nav>
      </header>

      <section className="about-section" id="about">
        <section>
          <div className="about-title-container">
            <h1 className="about-title">
              About <span style={{color: '#00abf0'}}>Me</span>
            </h1>
          </div>
        </section>

        <div className="about-content-box">
          <h2 className="about-description">
            <p>
              I'm <span style={{color: '#00abf0'}}>Hamza Al-Tal</span>, a Computer Science graduate from Jadara University with a passion for programming and technology. I have strong skills in full-stack web development from my training at Orange Coding Academy and good experience with mobile app development using Flutter. I enjoy solving complex problems and creating digital solutions that make a real difference. I am eager to use my skills in projects that have a positive impact which has helped me grow both technically and professionally. I am always looking to learn new technologies and improve my abilities.
            </p>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default About;