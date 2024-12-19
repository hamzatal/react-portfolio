import React, { useState } from "react";
import "../style/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });
  
  // Loading and success states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your API endpoint
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully!'
        });
        // Clear form
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <section className="page-intro">
        <h1 className="section-divider">
          Contact <span style={{ color: "#00abf0" }}>Me!</span>
        </h1>
      </section>

      <section className="contact-section">
        <div className="contact-text-area">
          <div className="text-placeholder"></div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-input-row">
              <div className="form-input-group">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
                <span className="input-focus"></span>
              </div>
              <div className="form-input-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-Mail"
                  required
                />
                <span className="input-focus"></span>
              </div>
            </div>

            <div className="form-input-row">
              <div className="form-input-group">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                />
                <span className="input-focus"></span>
              </div>
              <div className="form-input-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="E-Mail Subject"
                  required
                />
                <span className="input-focus"></span>
              </div>
            </div>

            <div className="form-textarea-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols="30"
                rows="10"
                placeholder="Your Message"
                required
              ></textarea>
              <span className="input-focus"></span>
            </div>

            {submitStatus.message && (
              <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
                {submitStatus.message}
              </div>
            )}

            <div className="form-submit-container">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>

          <div className="contact-social-links">
            <a href="mailto:hamza.t.a.altal@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> hamza.t.a.altal@gmail.com
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLocationDot} /> Jordan - Amman
            </a>
            <a
              href="https://wa.me/+962772372187"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPhone} /> +962772372187
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-tal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> hamza_tal
            </a>
            <a
              href="https://github.com/hamzatal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> hamzatal
            </a>
          </div>
        </div>
      </section>

      <footer className="page-footer">
        <div className="footer-content">
          <a href="#" className="footer-logo">
            <span style={{ color: "#00abf0" }}>H</span>amza. &copy; 2024 All
            rights reserved.
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;