import React from 'react';
import { Link } from 'react-router-dom';
import '../style/MyJourney.css';

const JourneyPage = () => {
  return (
    <section className="journey-section">
      <div className="journey-header">
        <h1 className="journey-title">
          My <span style={{ color: '#00abf0' }}>Journey</span>
        </h1>
        <div className="line-wrapper-journey">
          <span className="line left-line"></span>
          <span className="line right-line"></span>
        </div>
      </div>
      
      <section className="education-section">
        <div className="education-grid">
          <div className="education-card">
            <div className="education-details">
              <div className="education-year"><i className="bx bxs-calendar"></i> 2020 - 2024</div>
              <h3>Bachelor's Degree</h3>
              <p>Jadara - GPA: Very Good</p>
            </div>
          </div>
          <div className="education-card">
            <div className="education-details">
              <div className="education-year"><i className="bx bxs-calendar"></i> 2022</div>
              <h3>ICDL</h3>
              <p>Course</p>
            </div>
          </div>
          <div className="education-card">
            <div className="education-details">
              <div className="education-year"><i className="bx bxs-calendar"></i> 2023 - 2024</div>
              <h3>Flutter</h3>
              <p>Course</p>
            </div>
          </div>
          <div className="education-card">
            <div className="education-details">
              <div className="education-year"><i className="bx bxs-calendar"></i> 2024 - 2025</div>
              <h3>Full-Stack Web Development</h3>
              <p>Orange Coding Academy (OCA)</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default JourneyPage;
