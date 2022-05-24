import "./HeroImgStyles.css";

import React from 'react'

import HeroImg from "../assests/hero-img.jpg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img" src={HeroImg} alt="hero"/>
        </div>
        <div className="content">
            <p>HI, I'M A Full Stack DEVELOPER</p>
            <h1>MERN Stack.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className=" btn btn-light">Contact</Link>
            </div>
        </div>

    </div>
  )
}

export default Heroimg