import "./FooterStyles.css"

import React from 'react'
import {FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaWhatsapp} from "react-icons/fa"

const Footer = () => {
    return  (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    
                    <div className="location">
                        <FaHome size={20} style={{color: "white", marginRight:"2rem"}} />
                    </div>
                    <div>
                        <p>No 12a OKolo Street</p>
                        <p>Onitsha, Anambra state, Nigeria.</p>
                    </div>
                    
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color: 
                        "white", marginRight:"2rem"}} />
                        +234 8098240363  </h4>
                    
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color: 
                        "white", marginRight:"2rem"}} />
                        edehjohnpaul@gmail.com</h4>
                    
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>I'M edeh johnpaul chukwuemeka, CEO
                        Founder of WebStudio. I enjoy discussing 
                        new projects and design Challenges.
                    </p>
                    <div className="social">
                        <a href="https://www.facebook.com/edeh.johnpaul.7982/" target="_blank" rel="noreferrer" >
                           <FaFacebook size={30} style={{color: 
                                "white", marginRight:"2rem"}} 
                            />
                        </a>
                        

                        <a href="https://www.instagram.com/webstudio61" target="_blank" rel="noreferrer" >
                           <FaInstagram size={30} style={{color: 
                                "white", marginRight:"2rem"}} 
                            />
                        </a>

                        <a href="https://www." target="_blank"  rel="noreferrer">
                           <FaWhatsapp size={30} style={{color: 
                                "white", marginRight:"2rem"}} 
                            />
                        </a>
                           
                    </div>   
                    
                </div>

            </div>
        </div>
    )
        
}

export default Footer