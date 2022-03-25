import React, { Fragment, useEffect, useRef } from "react";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

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
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        goToTopBtnRef.current.style.display = "block";
      } else {
        goToTopBtnRef.current.style.display = "none";
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
        <div className="container row">
          <div className="hero-content">
            <ul className="slogan h4">
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
      </div>
      <div className="projects-about">
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
    </Fragment>
  );
}

export default Home;
