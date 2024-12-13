import React from 'react';
import { Link } from 'react-router-dom';
import '../style/MyJourney.css';

function MyJourney() {
  return (
    <>
      <section >
        <div className="home-content">
          <h1 className="hr-lines">My <span style={{color: "#00abf0"}}>Journey</span></h1>
        </div>
      </section>

      <section className="Journey" id="journey">
        <div className="text"></div>

        <section className="education" id="education">
          <div className="education-row">
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>2020 - 2024</div>
                  <h3>Bachelors Degree</h3>
                  <p>Jadara - GPA: Very Good</p>
                </div>
              </div>
            </div>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>2022 - 2022</div>
                  <h3>ICDL</h3>
                  <p>Course</p>
                </div>
              </div>
            </div>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>2023 - 2024</div>
                  <h3>Flutter</h3>
                  <p>Course</p>
                </div>
              </div>
            </div>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>2024 - 2025</div>
                  <h3>Full-Stack Web Development</h3>
                  <p>Orange Coding Academy (OCA)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default MyJourney;