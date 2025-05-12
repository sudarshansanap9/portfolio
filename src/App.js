
import React from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import './styles/App.css';

const App = () => {
  // Determine if we should use HashRouter for GitHub Pages
  // GitHub Pages works better with HashRouter for SPAs
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  // Choose the appropriate router
  const RouterComponent = isGitHubPages ? HashRouter : Router;

  return (
    <RouterComponent>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </RouterComponent>
  );
};

export default App;
