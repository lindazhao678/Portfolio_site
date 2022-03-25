import React from "react";

import { getAllProjects }from "../services/projectData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProjectGalleryCard from "./ProjectGalleryCard";
import { useNavigate } from "react-router-dom";

function ProjectGallery() {
  const navigate = useNavigate();
  function renderThumbs(){
    const images =getAllProjects().map((item)=>createImg(item.img))
    return images
  }
  function createImg(img){
    return <img src={img} alt="thumb"/>
  }
  function handleClick(index){
    const project = (getAllProjects())[index];
    navigate('/projectdetail', {state: project});
  }
  return (
    <Carousel renderThumbs={renderThumbs} autoPlay={true} interval={2000} infiniteLoop={true} onClickItem={handleClick}>
      {getAllProjects().map((item)=><div>
       <ProjectGalleryCard project={item}/>
      </div>)
      }
    </Carousel>
  );
}

export default ProjectGallery;
