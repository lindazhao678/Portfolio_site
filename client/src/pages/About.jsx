import React from "react";
import logo from "../assets/logo.png";

function About({aboutRef}) {
  return (
    <div className="about-section clearfix py-5" ref={aboutRef}>
      <h2 className="title-v float-start d-none d-md-block">ABOUT</h2>
      <h1 className="text-center text-light d-md-none">ABOUT</h1>


        <div className="d-flex justify-content-center">
          <div className="about-content">
            <p className="about-text text-light p-4">
              <img src={logo} className="float-start pe-3" alt="selfie" />
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
          <h2 className="text-center pt-5 text-light">MY SKILLS</h2>
          <div className="skill-card row text-center pb-5 container">
            <div className="col p-3">
              <div className="badge rounded-pill">HTML</div>
            </div>
            <div className="col p-3">
              <div className="badge rounded-pill">CSS/SASS</div>
            </div>
            <div className="col p-3">
              <div className="badge rounded-pill">JavaScript</div>
            </div>
            <div className="col p-3">
              <div className="badge rounded-pill">TypeScript</div>
            </div>
            <div className="col p-3">
              <div className="badge rounded-pill">Figma</div>
            </div>
            <div className="col p-3">
              <div className="badge rounded-pill">React JS</div>
            </div>
            <div className="col p-3">
              <div className="badge rounded-pill">Bootstrap</div>
            </div>
            <div className="col p-3">
              <div className="badge rounded-pill">Photoshop</div>
            </div>
            <div className="col p-3">
              <div className="badge rounded-pill">Node JS</div>
            </div>
          </div>
        </div>


    </div>
  );
}

export default About;
