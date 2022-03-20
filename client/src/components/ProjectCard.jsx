import React from 'react';
import project from "../assets/project_1.png";

function ProjectCard({projectImg, projectLink}) {
  return (
    <div className="project-card">
      <img src={projectImg} alt="project" className="project-img" />
      <button class="btn">Explore More</button>
    </div>
  )
}

export default ProjectCard