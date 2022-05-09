import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { projectData } from "../services/projectData";

function ProjectDetail() {
  const { state: project } = useLocation();
  const navigate = useNavigate();
  const id = project.id;
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id === 1) {
      setPrevDisabled(true);
    } else setPrevDisabled(false);
    if (id === 4) {
      setNextDisabled(true);
    } else setNextDisabled(false);
  }, [id]);

  function handlePrev() {
    if (id > 1) {
      const newProject = projectData(id - 1);
      navigate("/projectdetail", { state: newProject });
    }
  }

  function handleNext() {
    if (id < 4) {
      const newProject = projectData(id + 1);
      navigate("/projectdetail", { state: newProject });
    }
  }

  function viewDemo() {
    window.location = "https://www.google.com";
  }

  function viewSource() {
    window.location = "https://www.google.com";
  }

  return (
    <div className="project-detail">
      <h1 className="text-light text-center pb-3">{project.name}</h1>
      <div className="project-detail-card">
        <img className="project-detail-image" src={project.img} alt="project" />
        <button className="demo-button" onClick={viewDemo}>
          View Demo {">>"}
        </button>
        <button className="source-button" onClick={viewSource}>
          Source Code {">>"}
        </button>
      </div>

      <div className="detail-content mt-5 text-light">
        <h3 className="detail-title text-center">ABOUT PROJECT</h3>
        <div className="detail-info row mx-auto mt-5 justify-content-lg-center">
          <div className="detail-brief col-12 col-lg-4">
            <h5 className="pb-3">Project Description:</h5>
            <p className="project-brief">{project.brief}</p>
            <hr className="d-lg-none" />
          </div>
          <div className="detail-tech col-12 col-lg-4">
            <h5 className="e pb-3">Project technologies:</h5>
            <ul className="project-tech">
              {project.tech.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="nav-project mx-auto pb-5 row justify-content-md-around">
        <button
          className="nav-button col-6 col-md-3"
          onClick={handlePrev}
          disabled={prevDisabled}
        >
          {"<<"} Prev Project
        </button>
        <button
          className="nav-button col-6 col-md-3"
          onClick={handleNext}
          disabled={nextDisabled}
        >
          Next Project {">>"}
        </button>
      </div>
    </div>
  );
}

export default ProjectDetail;
