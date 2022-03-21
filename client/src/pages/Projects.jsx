import React from "react";
import ProjectGallery from "../components/ProjectGallery.jsx";

function Projects({ projectsRef }) {
  return (
    <div className="project-section" ref={projectsRef}>
      <h1 className="project-title text-light">PROJECTS</h1>
      <div className="project-carousel">{<ProjectGallery />}</div>
    </div>
  );
}

export default Projects;
