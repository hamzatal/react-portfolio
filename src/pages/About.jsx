import React from 'react';
import { Link } from 'react-router-dom';
import '../style/About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="header">
        <Link to="/" className="logo">
          <span style={{color: '#00abf0'}}>H</span>amza.
        </Link>
        <nav className="navbar">
          <Link to="/" className="">Home</Link>
          <Link to="/about" className="active">About Me</Link>
          <Link to="/myjourney" className="">My Journey</Link>
          <Link to="/project" className="">My Project</Link>
          <Link to="/contact" className="">Contact Me!</Link>
        </nav>
      </header>

      <section className="about" id="about">
        <section>
          <div className="home-content">
            <h1 className="hr-lines">
              About <span style={{color: '#00abf0'}}>Me</span>
            </h1>
          </div>
        </section>

        <div className="about-content">
          <h2 className="about-me">
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