import React, { Fragment, useEffect, useRef } from "react";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function Home(props) {
  const location = useLocation().pathname;
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const goToTopBtnRef = useRef(null);

  useEffect(() => {
    if (location) {
      if (location === "/projects") {
        scroll(projectsRef.current.offsetTop);
      } else if (location === "/about") {
        scroll(aboutRef.current.offsetTop);
      } else if (location === "/contact") {
        scroll(contactRef.current.offsetTop);
      }
    }
    window.addEventListener("scroll", function () {
      if (goToTopBtnRef.current) {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          goToTopBtnRef.current.style.display = "block";
        } else {
          goToTopBtnRef.current.style.display = "none";
        }
      }
    });
  }, [location]);

  function scroll(top) {
    window.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  }
  
  return (
    <Fragment>
      <div className="hero-section">
        <div className="overlay">

        <div className="container row">
          <div className="hero-content">
            <h1 className="warning-text">Hello!</h1>
            <br />
            <h4 className="text-light">I'm Lijun Zhao,</h4>
            <h4 className="text-light">a web developer </h4>
            <h4 className="text-light">based in Melbourne.</h4>
            <br />
            <h4 className="warning-text">Welcome to my Website!</h4>
          </div>
        </div>
        <div className="down-arrow bounce text-light">
          <FaArrowDown />
        </div>
        </div>
      </div>

      <div className="projects-about">
        <div className="overlay">        
        <Projects projectsRef={projectsRef} />
        <About aboutRef={aboutRef} />
      </div>
      <Contact contactRef={contactRef} />
      <button
        onClick={() => scroll(0)}
        ref={goToTopBtnRef}
        className="go-to-top-button"
      >
        <FaArrowUp />
      </button>
      </div>
    </Fragment>
  );
}

export default Home;
