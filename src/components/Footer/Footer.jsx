import React from 'react';
import './Footer.css';

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiAboutdotme } from "react-icons/si";


const Footer = () => {
  return (
    <div className='gpt3__footer section-padding'>
      

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <h6>Tic Tac Toe</h6>
          <p>Tic Tac Toe, All Rigths Reserved</p>
          <p>Find the Links Above To Follow Me</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p><FiGithub color="#fff" size={22}/> <span >GitHub</span></p>
          <p><FiLinkedin color="#fff" size={22}/> <span >LinkedIn</span></p>
          <p><SiAboutdotme color="#fff" size={22}/> <span >Resume</span></p>
        </div>
        <div className='gpt3__footer-links_div' id='about-me'>
          <h4>About Me</h4>
          <p>Full Stact Web-Developer</p>
          <p>Love Cricket</p>
          <p>Enjoy Cooking</p>
        </div>
        <div className='gpt3__footer-links_div' id='contact-me'>
          <h4>Get in touch</h4>
          <p>Claret Road Grangemouth FK39LS</p>
          <p>0739-732-5523</p>
          <p>ashurkanwal@yahoo.com</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>&copy; 2022 Tic Tac Toe. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer