import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      techStack: ['React', 'Node.js'],
      image: './assets/sudarshan.png'
    },
    // Add more projects as needed
  ];

  return (
    <div id="projects" className="projects-container">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
