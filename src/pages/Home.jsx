import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css'; // We'll create this CSS file to match the original styling

const PortfolioHome = () => {
  return (
    <div className="portfolio-container">
      <header className="header">
        <Link to="/" className="logo">
          <span style={{ color: '#00abf0' }}>H</span>amza.
        </Link>
        <nav className="navbar">
          <Link to="/" className="active">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/journey">My Journey</Link>
          <Link to="/projects">My Project</Link>
          <Link to="/contact">Contact Me!</Link>
        </nav>
      </header>

      <section className="home">
        <div className="home-content">
          <h1>Hi, I'm <span className="name">Hamza Al-Tal</span></h1>
          <h3>Full Stack Web Developer</h3>
          <div className="btn-box">
            <a 
              href="https://www.linkedin.com/in/hamza-tal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn linkedin"
            >
              Hire Me <i className='bx bxl-linkedin-square'></i>
            </a>
            <a 
              href="https://github.com/hamzatal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn github"
            >
              GitHub <i className='bx bxl-github'></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioHome;