import React from "react";
import './ResumeOverview.scss'
import texts from '../utils/texts.js'

export default () =>  {
    return <div className="overview">
            <div className="summary">
                <h1>{texts.name}</h1>
                <h3>{texts.title}</h3>
                <p>{texts.about}</p>
            </div>
            <div className="hard__skills">
                <h2>{texts.skills.caption}</h2>
                <div className="skills__container">
                    {texts.skills.groups.map(group => {
                        return <ul key={group.id}> 
                            {group.skill.map(skill => {
                                return <li key={skill}>{skill}</li>
                            })}
                        </ul>
                    })}
                </div>
            </div>
            <div className="experience">
                <h2>Academic Experience</h2>
                {texts.projects.map(project => {
                    return  <div key={project.id} className="experience__block">
                        <h3>{project.name}</h3>
                        <span>Front End Developer</span>
                        <p>{project.description}</p>
                    </div>
                })}
            </div>
            <div className="education">
                <h2>{texts.education.caption}</h2>
                <ul>
                    <li>
                        <h4>{texts.education.place.name}</h4>
                        <span>{texts.education.place.year}</span>
                    </li>
                </ul>
            </div>
            <div className="education">
                <h2>{texts.additional.caption}</h2>
                <ul>
                    <li>
                        <h4>{texts.additional.place.name}</h4>
                        <span>{texts.additional.place.year}</span>
                    </li>
                </ul>
            </div>
    </div>
}