import React from "react";
import '../styles/PortfolioProject.scss'

export default ({name, description, link}) =>  {
    return <div className="project__info">
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <a className="link-button" href={link} target="_blank">GitHub</a>
    </div>
}