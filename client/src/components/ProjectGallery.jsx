import React from "react";
import Card1 from "./ProjectCard";

import projectImg1 from "../assets/project_1.png";
import projectImg2 from "../assets/project_2.png";
import projectImg3 from "../assets/project_3.png";
import projectImg4 from "../assets/project_4.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProjectCard from "./ProjectCard";

function ProjectGallery() {
  function renderThumbs(){
    return [createImg(projectImg1), createImg(projectImg2), createImg(projectImg3), createImg(projectImg4)]
  }
  function createImg(img){
    return <img src={img} alt="thumb"/>
  }
  return (
    <Carousel renderThumbs={renderThumbs}>
      <div>
       <ProjectCard projectImg={projectImg1}/>
      </div>
      <div>
      <ProjectCard projectImg={projectImg2}/>
      </div>
      <div>
      <ProjectCard projectImg={projectImg3}/>
      </div>
      <div>
      <ProjectCard projectImg={projectImg4}/>
      </div>
    </Carousel>
  );
}

export default ProjectGallery;
