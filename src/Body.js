import React from "react";
import mailcon from './images/mailcon.png';
import linkedin from './images/linked.png';
export default function Body() {
    return (
        <div className="body-container">
            <div className="body-container-header">
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <p>laurasmith.website</p>
            </div>
            <div className="body-container-btn-link">
                <button className="email"><img src={mailcon} /> Email</button>
                <button className="linkedin"><img src={linkedin} /> LinedIn</button>
            </div>
            <div className="body-container-about">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>


        </div>
    )
}