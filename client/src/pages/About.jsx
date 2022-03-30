import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { getAllProjects }from "../services/projectData";
import selfie from "../assets/selfie.jpeg";

function About({aboutRef}) {

  const navigate = useNavigate();
  

  function handleSkill(skill){
    const project = getAllProjects().find(p=>p.skills?.includes(skill)) || (getAllProjects())[0];
    navigate('/projectdetail', {state: project});
  }
  return (
    <div className="about-section clearfix py-5" ref={aboutRef}>
      <h2 className="title-v float-start d-none d-lg-block">ABOUT</h2>
      <h1 className="text-center text-light d-lg-none">ABOUT</h1>

        <div className="d-flex justify-content-center">
          <div className="about-content">
            <p className="about-text clearfix text-light p-4">
              <img src={selfie} className="selfie float-start rounded-circle" alt="selfie" />
              Lorem occaecat id magna ad. Qui reprehenderit duis amet sint
              officia. Et qui pariatur nostrud laboris aliqua velit consequat
              eiusmod incididunt minim magna esse. Magna proident aliqua enim
              reprehenderit quis sunt laboris. Irure in exercitation id elit
              commodo non ad id. Et veniam excepteur non officia fugiat aliqua
              sint culpa tempor adipisicing Lorem ullamco excepteur. Voluptate
              nulla in sunt consectetur magna nulla quis amet Lorem amet officia.Sit consequat reprehenderit labore et ut et. Velit enim ut eu irure dolore anim officia nisi non sint ullamco. Commodo et Lorem deserunt est laborum.
            </p>
          </div>
        </div>

        <div className="about-skills py-5">
          <h2 className="text-center text-light">MY SKILLS</h2>
          <div className="skill-card row text-center container justify-content-around mx-auto">
            <div className="col p-3">
              <button className="badge rounded-pill" onClick={()=>handleSkill('html')}>HTML</button>
            </div>
            <div className="col p-3">
              <button className="badge rounded-pill" onClick={()=>handleSkill('sass')}>CSS/SASS</button>
            </div>
            <div className="col p-3">
              <button className="badge rounded-pill" onClick={()=>handleSkill('javascript')}>JavaScript</button>
            </div>
            <div className="col p-3">
              <button className="badge rounded-pill" onClick={()=>handleSkill('typescript')}>TypeScript</button>
            </div>
            <div className="col p-3">
              <button className="badge rounded-pill" onClick={()=>handleSkill('figma')}>Figma</button>
            </div>
            <div className="col p-3">
              <button className="badge rounded-pill" onClick={()=>handleSkill('react')}>React JS</button>
            </div>
            <div className="col p-3">
              <button className="badge rounded-pill" onClick={()=>handleSkill('bootstrap')}>Bootstrap</button>
            </div>
            <div className="col p-3">
              <button className="badge rounded-pill" onClick={()=>handleSkill('photoshop')}>Photoshop</button>
            </div>
            <div className="col p-3">
              <button className="badge rounded-pill" onClick={()=>handleSkill('node')}>Node JS</button>
            </div>
          </div>
        </div>

    </div>
  );
}

export default About;
