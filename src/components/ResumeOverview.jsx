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
                                return <li>{skill}</li>
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
                    {texts.education.place.map(place => {
                        return <li key={place.name}>
                            <h4>{place.name}</h4>
                            <span>{place.year}</span>
                        </li>
                    })}
                </ul>
            </div>
    </div>
}