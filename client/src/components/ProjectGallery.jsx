import React from "react";

import { getAllProjects }from "../services/projectData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProjectGalleryCard from "./ProjectGalleryCard";

function ProjectGallery() {
  function renderThumbs(){
    const images =getAllProjects().map((item)=>createImg(item.img))
    return images
  }
  function createImg(img){
    return <img src={img} alt="thumb"/>
  }
  return (
    <Carousel renderThumbs={renderThumbs}>
      {getAllProjects().map((item)=><div>
       <ProjectGalleryCard project={item}/>
      </div>)
      }
    </Carousel>
  );
}

export default ProjectGallery;
