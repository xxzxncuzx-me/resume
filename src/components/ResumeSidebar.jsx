import React from "react";
import './ResumeSidebar.scss'
import texts from "../utils/texts.js";

export default () =>  {
    return <div className="sidebar">
        <div className="photo"></div>
        <div className="sidebar__main">
            <div className="info">
            <h3>{texts.contact.caption}</h3>
            <ul>
                <li><h5>{texts.contact.location.name}</h5><p>{texts.contact.location.data}</p></li>
                {texts.contact.list.map(list => {
                    return <li key={list.url}>
                            <h5>{list.name}</h5>
                            <a href={list.url}>{list.caption}</a>
                        </li>
                })}
            </ul>
            </div>
            <div className="soft__skills">
                <h3>{texts.softSkills.caption}</h3>
                <ul>
                    {texts.softSkills.skills.map(skill => {
                        return <li key={skill}>{skill}</li>
                    })}
                </ul>
            </div>
            <div className="language">
                <h3>{texts.languages.caption}</h3>
                <ul>
                    {texts.languages.language.map(language => {
                        return <li key={language}>{language}</li>
                    })}
                </ul>
            </div>
        </div>
    </div>
}