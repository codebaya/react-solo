import React from "react";
import fb from './images/Facebook Icon.png'
import gh from './images/GitHub Icon.png'
import ii from './images/Instagram Icon.png'
import ti from './images/Twitter Icon.png'

export default function Footer() {
    return (
        <div className="footer">
            <img src={ti} />
            <img src={fb} />
            <img src={ii} />
            <img src={gh} />

        </div>
    )
}