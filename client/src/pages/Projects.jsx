import React from "react";
import Carousel from "../components/ProjectGallery.jsx";

function Projects({projectsRef}) {
  
  return (
    <div id="projectSection" className="project-section row" ref={projectsRef}>
      <h2 className="project-title col-1" >PROJECTS</h2>
      <div className="project-details col">
        <div className="project-details-carousel">{<Carousel />}</div>
      </div>
    </div>
  );
}

export default Projects;
