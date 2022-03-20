import React from 'react';
import project from "../assets/project.png";

function Card2() {
  return (
    <div className="card">
      <img src={project} alt="project-1" className="project-img" />
      <button class="btn1">View Demo</button>
      <button class="btn2">Source Code</button>  
    </div>
  )
}

export default Card2
