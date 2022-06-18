import React from 'react'
import "./HeroImgStyles.css";

import HeroImg from "../assests/hero-img.jpg"
import { Link } from "react-router-dom";

import FileSaver from 'file-saver';


const saveFile = () => {
  FileSaver.saveAs(
    process.env.PUBLIC_URL + "/files/cv.pdf",
    "MyCv.pdf"
  );
}

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img" src={HeroImg} alt="hero"/>
        </div>
        <div className="content">
            <p>HI, I'M Edeh Johnpaul</p>
            <h1>FUUL STACK DEVELOPER</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className=" btn btn-light">Contact</Link>
                <button className="btn btn-light" onClick={saveFile}>
                  Download Resume
                </button>
            </div>
        </div>

    </div>
  )
}

export default Heroimg