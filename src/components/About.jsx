import React from "react";
import "../style/About.css";
function AboutSection() {
  return (
    <section className="about-container">
      <div className="about-heading-wrapper">
        <h1 className="about-heading">
          About <span className="highlight-text">Me</span>
        </h1>
        <div className="line-wrapper">
          <span className="line left-line"></span>
          <span className="line right-line"></span>
        </div>
      </div>
      <div className="about-box">
        <p className="about-paragraph">
          I’m <span className="highlight-text">Hamza Al-Tal</span>, a Computer Science graduate from Jadara University with a passion for programming and technology. I have strong skills in full-stack web development from my training at Orange Coding Academy and good experience with mobile app development using Flutter. I enjoy solving complex problems and creating digital solutions that make a real difference. I am eager to use my skills in projects that have a positive impact, which has helped me grow both technically and professionally. I am always looking to learn new technologies and improve my abilities.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;