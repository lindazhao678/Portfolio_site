import React, {useState} from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { projectData } from "../services/projectData";

function ProjectDetail() {

  const { state: project } = useLocation();
  const navigate = useNavigate();

  const id = project.id;

  function handlePrev(){ 
    if (id>1){ 
      const newProject = projectData(id-1)
      console.log(newProject)
      navigate('/projectdetail', {state: newProject});
    }
  }

  function handleNext(){
    if(id<4){
      const newProject = projectData(id+1)
      console.log(newProject)
      navigate('/projectdetail', {state: newProject});
    }
  }

  function viewDemo(){

  }

  function viewSource(){
    window.location='https://www.google.com';
  }

  return (
    <div className="project-detail">
      <div className="project-detail-card">
        <img className="project-detail-image" src={project.img} alt="project" />
         <button className="demo-button" onClick={viewDemo}>View Demo</button>
         <button className=" button" onClick={viewSource}>Source Code</button>
      </div>

      <div className="detail-content mt-5 text-light">
        <h1 className="detail-title text-center">ABOUT PROJECT</h1>
        <div className="detail-info row mt-5 justify-content-md-center">
          <div className="detail-brief col-3">
            <h5>Project Description:</h5>
            {project.brief}
          </div>
          <div className="detail-tech col-3">
            <h5>Project technologies:</h5>
            {project.tech}
          </div>
        </div>
      </div>

      <div className="nav-project row justify-content-between">
        <button className="nav-button col-2" onClick={handlePrev} disabled={id<2}>Prev Project</button>
        <button className="nav-button col-2" onClick={handleNext}>Next Project</button>
      </div>

    </div>
  );
}

export default ProjectDetail;
