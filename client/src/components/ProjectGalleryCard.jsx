import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectGalleryCard( {project} ) {
  const navigate = useNavigate();

  function handleMore(){
    navigate('/projectdetail', {state: project});
  }

  return (
    <div className="project-gallery-card">
      <img src={project.img} alt="project" />
      <button>
        <button className="more-button text-bold" onClick={handleMore}>Explore More {'>>'}</button>
      </button>
    </div>
  );
}

export default ProjectGalleryCard;
