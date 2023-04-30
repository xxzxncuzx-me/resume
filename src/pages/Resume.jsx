import React from "react";
import '../styles/Resume.scss'
import ResumeSidebar from "../components/ResumeSidebar";
import ResumeOverview from "../components/ResumeOverview";



export default () =>  {
    return <div>
        <div className="resume">
            <ResumeSidebar/>
            <ResumeOverview/>
        </div>

        <a className="download" href='http://localhost:3000/CV_Iryna_Fedorova.pdf' download> Download Resume</a>
    </div>
}