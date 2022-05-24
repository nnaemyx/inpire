import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assests/picture4.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>About Me</h1>
            <p>I'M a Edeh Johnpaul Chukwuemeka, Frontend Developer
                I create responsive website for my clients using React.js,NodeJs,ExpressJs
                ,MongoDB(MERN)
            </p>
            <Link to="/contact" >
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <img src={React1} className="img" 
                alt="true"
                />
            </div>
        </div>
    </div>
  )
}

export default AboutContent