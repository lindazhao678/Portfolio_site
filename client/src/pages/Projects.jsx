import React from "react";
import ProjectGallery from "../components/ProjectGallery.jsx";

function Projects({ projectsRef }) {
  return (
    <div className="project-section clearfix" ref={projectsRef}>
      <h1 className="title-v float-start">PROJECTS</h1>
      <div className="project-carousel">{<ProjectGallery />}</div>
    </div>
  );
}

export default Projects;
