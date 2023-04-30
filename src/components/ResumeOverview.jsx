import React from "react";
import '../styles/ResumeOverview.scss'
import texts from '../utils/texts.js'
import projects from "../utils/projects.js";

export default () =>  {
    return <div className="overview">
            <div className="summary">
                <h1>{texts.name}</h1>
                <h3>{texts.title}</h3>
                <p>{texts.about}</p>
            </div>
            <div className="hard__skills">
                <h2>Skills</h2>
                <div className="skills__container">
                    <ul>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Webpack</li>
                    </ul>
                    <ul>
                        <li>Gulp</li>
                        <li>Node.js</li>
                        <li>Git</li>
                    </ul>
                    <ul>
                        <li>Bootstrap</li>
                        <li>HTML</li>
                        <li>CSS, SASS/SCSS</li>
                    </ul>
                </div>
            </div>
            <div className="experience">
                <h2>Academic Experience</h2>
                <div className="experience__block">
                    <h3>IT School Project</h3>
                    <span>Front End Developer</span>
                    <p>{projects[0].description}</p>
                </div>
                <div className="experience__block">
                    <h3>Fashion Blog Project</h3>
                    <span>Front End Developer</span>
                    <p>{projects[1].description}</p>
                </div>
            </div>
            <div className="education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <h4>Taras Shevchenko National University of Kyiv, Institute of Law</h4>
                        <span>2020-present</span>
                    </li>
                    <li>
                        <h4>Front End Pro at Hillel It School</h4>
                        <span>2022-2023</span>
                    </li>
                </ul>
            </div>
    </div>
}