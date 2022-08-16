import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa"
import {AiFillTwitterSquare} from "react-icons/ai"

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                +234 8098240363{" "}
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                edehjohnpaul@gmail.com
              </h4>
            </div>
          </div>
          <div className="right">
            <h4>About the company</h4>
            <p>
              I'M edeh johnpaul chukwuemeka, CEO Founder of MernDock. I enjoy
              discussing new projects and design Challenges.
            </p>
            <div className="social">
              <a
                href="https://www.facebook.com/profile.php?id=100083084891109"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook
                  size={30}
                  style={{ color: "white", marginRight: "2rem" }}
                />
              </a>

              <a
                href="https://twitter.com/EdehJohnpaul"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterSquare
                  size={30}
                  style={{ color: "white", marginRight: "2rem" }}
                />
              </a>

              <a
                href="https://wa.me/2348098240363"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp
                  size={30}
                  style={{ color: "white", marginRight: "2rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
        
}

export default Footer