
import React from 'react';
import '../styles/HeroSection.css';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Get the base URL from the environment or default to empty string
  // This helps with GitHub Pages deployment where the site is in a subdirectory
  const baseUrl = process.env.PUBLIC_URL || '';

  return (
    <div className="hero-container">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="profile-img-container">
          <img
            src={`${baseUrl}/assets/sudarshan.png`}
            alt="Profile"
            className="profile-img"
            onError={(e) => {
              console.error("Image failed to load");
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = `${baseUrl}/assets/profile-fallback.png`; // Fallback image
            }}
          />
        </div>
        <div className="welcome-message">
          <h1>Hi, I'm Sudarshan Sanap</h1>
          <p>A passionate Web Developer with a love for building innovative solutions.</p>
          <a 
            href={`${baseUrl}/assets/resume.png`} 
            download="Sudarshan_Sanap_Resume.png"
            className="download-resume-btn"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
