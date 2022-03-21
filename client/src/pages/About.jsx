import React from "react";
import logo from "../assets/logo.png";

function About({aboutRef}) {
  return (
    <div className="about-section text-light" ref={aboutRef}>
      <h1 className="about-title">ABOUT</h1>
      <div className="container">

        <div className="d-flex pt-5 justify-content-center">
          <div className="about-content-box">
            <p className="about-text p-4">
              <img src={logo} className="logo float-start m-3" alt="logo" />
              Lorem occaecat id magna ad. Qui reprehenderit duis amet sint
              officia. Et qui pariatur nostrud laboris aliqua velit consequat
              eiusmod incididunt minim magna esse. Magna proident aliqua enim
              reprehenderit quis sunt laboris. Irure in exercitation id elit
              commodo non ad id. Et veniam excepteur non officia fugiat aliqua
              sint culpa tempor adipisicing Lorem ullamco excepteur. Voluptate
              nulla in sunt consectetur magna nulla quis amet Lorem amet officia
              anim.Incididunt tempor.Reprehenderit et pariatur nulla labore
              irure nisi officia officia ea exercitation dolore. Anim pariatur
              incididunt et cillum ad et culpa enim.
            </p>
          </div>
        </div>

        <div className="about-skills">
          <h1 className="text-center pt-5">MY SKILLS</h1>
          <div className="skill-card row row-cols-3 text-center pb-5">
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
    </div>
  );
}

export default About;
