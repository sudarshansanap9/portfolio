import React from 'react';
import './HeroSection.css';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
            src="/assets/profile-image.jpg" // Path to your image
            alt="Profile"
            className="profile-img"
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
