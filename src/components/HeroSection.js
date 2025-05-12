
import React from 'react';
import './HeroSection.css';
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
              e.target.src = `${baseUrl}/assets/profile-fallback.png`; // Fallback image
            }}
          />
        </div>
        <div className="welcome-message">
          <h1>Hi, I'm [Your Name]</h1>
          <p>A passionate [Your Role] with a love for building innovative solutions.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
