import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
//import './socialfollow.css'
import styled from "styled-components";
const SocialContainer=styled.div` 
background-color: orange;
padding: 30px;
margin-top: -15%;
display:grid;
a.social {
    margin-top: -20%;
    padding: 1.25rem;
    transition: transform 250ms;
    display: inline-block;
    size: 2rem;
  }
  a.social:hover {
    transform: translateY(-10px);
  }
  a.youtube {
    color: #eb3223;
    
  }
  
  a.facebook {
    color: #4968ad;
  }
  
  a.twitter {
    color: #49a1eb;
  }
  
  a.instagram {
    color: pink;
  }
 
`;


  
  
export default function SocialFollow() {
    return (
        <SocialContainer>
        <div class="social-container">

            <a href="#"
                className="youtube social" target="_blank">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/thinkindiajpr/"
                className="facebook social" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="twitter social" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/thinkindiamnit/?hl=en"
                className="instagram social" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
        </SocialContainer>
    );
}