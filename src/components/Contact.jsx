import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would typically handle form submission here
    console.log('Form submitted:', formData);
    // Add your form submission logic (e.g., send to backend, email service)
  };

  return (
    <div className="contact-page">
      <header className="header">
        <Link to="/" className="logo">
          <span style={{color: '#00abf0'}}>H</span>amza.
        </Link>
        <nav className="navbar">
          <Link to="/" className="">Home</Link>
          <Link to="/about" className="">About Me</Link>
          <Link to="/myjourney" className="">My Journey</Link>
          <Link to="/project" className="">My Project</Link>
          <Link to="/contact" className="active">Contact Me!</Link>
        </nav>
      </header>

      <section className="contact">
        <section >
          <div className="home-content">
            <h1 className="hr-lines">
              Contact <span style={{color: '#00abf0'}}>Me!</span>
            </h1>
          </div>
        </section>

        <section className="contact-container" id="contact">
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <div className="input-field">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full NAME" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <span className="focus"></span>
              </div>
              <div className="input-field">
                <input 
                  type="email" 
                  name="email"
                  placeholder="E-Mail" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <span className="focus"></span>
              </div>
            </div>

            <div className="input-box">
              <div className="input-field">
                <input 
                  type="tel" 
                  name="mobile"
                  placeholder="Mobile Number" 
                  value={formData.mobile}
                  onChange={handleChange}
                  required 
                />
                <span className="focus"></span>
              </div>
              <div className="input-field">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="E-Mail Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
                <span className="focus"></span>
              </div>
            </div>

            <div className="textarea-field">
              <textarea 
                name="message"
                cols="30" 
                rows="10" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <span className="focus"></span>
            </div>

            <div className="btn-box">
              <button type="submit">Submit</button>
            </div>
          </form>

          <div className="icons-container">
            <a href="mailto:hamza.t.a.altal@gmail.com">
              <i className="fas fa-envelope"></i> hamza.t.a.altal@gmail.com
            </a>
            <a href="#">
              <i className="fas fa-location"></i> Jordan - Amman
            </a>
            <a href="https://wa.me/+962772372187" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-phone"></i> +962772372187
            </a>
            <a href="https://www.linkedin.com/in/hamza-tal/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> hamza_tal
            </a>
            <a href="https://github.com/hamzatal" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> hamzatal
            </a>
          </div>
        </section>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <Link to="/" className="logo">
            <span style={{color: '#00abf0'}}>H</span>amza. &copy; 2024 All rights reserved.
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Contact;