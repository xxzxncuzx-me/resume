import React from "react";
import './Home.scss';
import texts from '../utils/texts.js'

export default () => {
    return <div className="home__page"> 
        <div className="home__page--content">
            <h2>{texts.name}</h2>
            <h3>{texts.title}</h3>
            <p>{texts.about}</p>
        </div>
        <div className="img"></div>
    </div>

}