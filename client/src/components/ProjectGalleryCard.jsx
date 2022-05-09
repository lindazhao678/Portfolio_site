import React from "react";

function ProjectGalleryCard({ project }) {
  return (
    <div className="project-gallery-card">
      <img src={project.img} alt="project" />
      <button className="more-button text-bold">Explore More {">>"}</button>
    </div>
  );
}

export default ProjectGalleryCard;
