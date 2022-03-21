import React from "react";
import ProjectGallery from "../components/ProjectGallery.jsx";

function Projects({projectsRef}) {
  
  return (
    <div className="project-section row" ref={projectsRef}>
      <h2 className="project-title col-1 text-light" >PROJECTS</h2>
      <div className="col">
        <div className="project-carousel">{<ProjectGallery />}</div>
      </div>
    </div>
  );
}

export default Projects;
