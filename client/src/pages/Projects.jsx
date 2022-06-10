import React from "react";
import ProjectGallery from "../components/ProjectGallery.jsx";

function Projects({ projectsRef }) {
  return (
    <div className="project-section py-5 clearfix" ref={projectsRef}>
      <h2 className="title-v float-start d-none d-lg-block">PROJECTS</h2>
       <h1 className="text-center d-lg-none">PROJECTS</h1>
      <div className="project-carousel">{<ProjectGallery />}</div>
    </div>
  );
}

export default Projects;
