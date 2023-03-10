import React from "react";
import { useNavigate } from "react-router-dom";
import { getAllProjects } from "../services/projectData";
import selfie from "../assets/selfie.avif";
import { getAllSkills } from "../services/skillData";

function About({ aboutRef }) {
  const navigate = useNavigate();

  function handleSkill(skill) {
    const project =
      getAllProjects().find((p) => p.skills?.includes(skill)) ||
      getAllProjects()[0];
    navigate("/projectdetail", { state: project });
  }

  return (
    <div className="about-section clearfix py-5" ref={aboutRef}>
      <h2 className="title-v float-start d-none d-lg-block">ABOUT</h2>
      <h1 className="text-center d-lg-none">ABOUT</h1>
      <div className="d-flex justify-content-center">
        <div className="about-content">
          <p className="about-text clearfix p-4">
            <img
              src={selfie}
              className="selfie float-start rounded-circle"
              alt="selfie"
            />
           I am passionate about coding. I started coding in 2020 when I first tried to build my cake website. Since then, I have found it interesting and have become super obsessed with it. I feel great joy and competence in planning, designing, developing, testing, and finally launching a website. I enjoy exploring and learning new frameworks and tools. <br/>
           Overall, I am a dedicated and passionate web developer who is always striving to create responsive, user-friendly websites that are optimized for speed and search engine visibility to provide the best possible user experience. I am excited about the opportunity to work on new and challenging projects and to help bring the clients' ideas to life on the web.
          </p>
        </div>
      </div>

      <div className="about-skills py-5">
        <h2 className="text-center">MY SKILLS</h2>
        <div className="skill-card row text-center container justify-content-around mx-auto">
          {getAllSkills().map(skill => 
            <div className="col p-3">
              <button
                className="badge rounded-pill"
                onClick={() => handleSkill(skill.handleSkillName)}
              >
                {skill.name}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
