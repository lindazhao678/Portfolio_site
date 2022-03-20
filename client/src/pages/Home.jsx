import React, { Fragment } from "react";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

function Home({projectsRef}) {
  return (
    <Fragment>
      <div className="hero-section">
        <div className="hero-content">
          <ul>
            <li className="text-warning">Hello!</li>
            <br />
            <li>I'm Lijun Zhao,</li>
            <li>a web developer </li>
            <li>based in Melbourne.</li>
            <br />
            <li>Welcome to my Website!</li>
          </ul>
        </div>
      </div>
      <div className="projects-about">
      <Projects projectsRef={projectsRef}/>
      <About />
      </div>
      <Contact />
    </Fragment>
  );
}

export default Home;
