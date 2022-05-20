import React from "react";
import { useNavigate } from "react-router-dom";
import { getAllProjects } from "../services/projectData";
import selfie from "../assets/selfie.jpeg";
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
      <h1 className="text-center text-light d-lg-none">ABOUT</h1>
      <div className="d-flex justify-content-center">
        <div className="about-content">
          <p className="about-text clearfix text-light p-4">
            <img
              src={selfie}
              className="selfie float-start rounded-circle"
              alt="selfie"
            />
            I've been obsessed with coding. I started self-learning software
            development in 2020 when I first tried to build my own e-commerce
            website. From that time, I found myself deeply passionate on
            software development. From design to build, from development to
            production, I exprienced great joy and competence. I will finish my
            web development diploma in the year 2022, but I will not stop
            learning, I enjoy to explore and pick up new frameworks and tools.
            Now I can plan, design, build, launch, and maintain a website myself.
            That's me who will not waste any opportunity to keep learning and
            exploring the software development.
          </p>
        </div>
      </div>

      <div className="about-skills py-5">
        <h2 className="text-center text-light">MY SKILLS</h2>
        <div className="skill-card row text-center container justify-content-around mx-auto">
          {getAllSkills().map((skill) => (
            <div className="col p-3">
              <button
                className="badge rounded-pill"
                onClick={() => handleSkill(skill.handleSkillName)}
              >
                {skill.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
