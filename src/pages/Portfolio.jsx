import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Portfolio.scss'
import texts from "../utils/texts.js";

export default () =>{ 
    return <div className="portfolio">
        {texts.projects.map(project => {
            return <div key={project.id} className="projects">
                <div className="project__info">
                    <div>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                    <a className="link-button" href={project.link} target="_blank">GitHub</a>
                </div>
                <Carousel className="main-slide"> 
                    {project.images.map(img => {
                        return <div key={img.src}>
                            <img src={img.src}/>
                        </div> 
                    })}  
                </Carousel>
            </div>
        })}
    </div>
}