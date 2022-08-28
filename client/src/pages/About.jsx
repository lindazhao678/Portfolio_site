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
           I am passionate and obsessed with coding. I started self-learning software development in 2020 when I first tried to build my e-commerce website. From that time, I found it interesting. I felt great joy and competence to design, develop and finally make it online. 
I'm currently studying for a diploma in information technology and will finish later in 2022.
I enjoy exploring and picking up new frameworks and tools. It's a great feeling to plan, design, build, launch, and maintain a website myself.
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
