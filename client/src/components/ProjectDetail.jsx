import React from "react";
import ProjectDetailCard from "./ProjectDetailCard";
import { useLocation } from "react-router-dom";

function ProjectDetail() {
const {state:project} = useLocation();

  return (
    <div className="project-detail">
      <div className="detail-image">
        <ProjectDetailCard project={project}/>
      </div>
      <div className="detail-content">
        <div className="detail-title">ABOUT PROJECT</div>
        <div className="detail-info row">
          <div className="detail-brief col-6">{project.brief}</div>
          <div className="detail-tech col-6">{project.tech}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
