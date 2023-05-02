import React from "react";
import './ResumeSidebar.scss'

export default () =>  {
    return <div className="sidebar">
        <div className="photo"></div>
        <div className="sidebar__main">
            <div className="info">
            <h3>Contact</h3>
            <ul>
                <li><h5>Location</h5><p>Kyiv, Ukraine</p></li>
                <li><h5>Phone</h5><a href="tel:+380995691633">+380 99 569 16 33</a></li>
                <li><h5>Email</h5><a href="mailto:i.fedorova4321@gmail.com">i.fedorova4321@gmail.com</a></li>
                <li><h5>LinkedIn</h5><a href="https://www.linkedin.com/in/iryna-fedorova-075978272" target="_blank">xxzxncuzx_me</a></li>
                <li><h5>GitHub</h5><a href="https://github.com/xxzxncuzx-me" target="_blank">xxzxncuzx_me</a></li>
            </ul>
            </div>
            <div className="soft__skills">
                <h3>Soft Skills</h3>
                <ul>
                    <li>Time management</li>
                    <li>Problem solving</li>
                    <li>Adaptivity</li>
                    <li>Creativity</li>
                    <li>Teamwork</li>
                    <li>Willing to learn</li>
                </ul>
            </div>
            <div className="language">
                <h3>Language</h3>
                <ul>
                    <li>Native Ukrainian</li>
                    <li>English B2</li>
                </ul>
            </div>
        </div>
    </div>
}