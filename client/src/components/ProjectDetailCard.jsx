import React from "react";
import { Link } from "react-router-dom";

function ProjectDetailCard( {project} ) {

  return (
    <div className="project-detail-card">
      <img src={project.img} alt="project" className="project-detail-image" />
      <button className="demo-button">
        <Link to="#">View Demo</Link>
      </button>
      <button className="source-button">
        <Link to="#">Source Code</Link>
      </button>
    </div>
  );
}

export default ProjectDetailCard;