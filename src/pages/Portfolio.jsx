import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Portfolio.scss'
import PortfolioProjects from "../components/PortfolioProject.jsx";
import projects from "../utils/projects.js"

import FashionBlog from '../icons/fashion-blog.jpg'
import FashionBlog2 from '../icons/fashion-blog-2.jpg'
import ItSchool from '../icons/it-school.jpg'
import ItSchool2 from '../icons/it-school-2.jpg'
import ItSchool3 from '../icons/it-school-3.jpg'

export default () =>{ 
    return <div className="portfolio">
            <div className="project">
                <PortfolioProjects name={projects[0].name} description={projects[0].description} link={projects[0].link} /> 
                <Carousel className="main-slide">   
                    <div>
                        <img src={ItSchool}/>
                    </div>
                    <div>
                        <img src={ItSchool2}/>
                    </div>
                    <div>
                        <img src={ItSchool3}/>
                    </div>
                </Carousel>
            </div>
            <div className="project">
                <PortfolioProjects name={projects[1].name} description={projects[1].description} link={projects[0].link}/>
                <Carousel className="main-slide">   
                    <div>
                        <img src={FashionBlog}/>
                    </div>
                    <div>
                        <img src={FashionBlog2}/>
                    </div>
                </Carousel>
            </div>
    </div>
}