import React from 'react';
import './SocialMedia.css';
import { FiTwitter, FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";
import { SiAboutdotme } from "react-icons/si";



const SocialMedia = () => {
  return (
    <div className='social section-padding'>
      <div>
        <a href='https://twitter.com/' className='social-text' target='_blank' rel='noreferrer'>
            <FiTwitter color="#fff" size={27}/>
            <span className='gradient-text'>Twitter</span>
        </a>
      </div>
      <div>
        <a href='https://github.com/ashur-k' className='social-text' target='_blank' rel='noreferrer'>
            <FiGithub color="#fff" size={27}/>
            <span className='gradient-text'>GitHub</span>
        </a>
      </div>
      <div>
        <a href='https://www.facebook.com/' className='social-text' target='_blank' rel='noreferrer'>
            <FiFacebook color="#fff" size={27}/>
            <span className='gradient-text'>Facebook</span>
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/ashur-kanwal-37979b195/' className='social-text' target='_blank' rel='noreferrer'>
            <FiLinkedin color="#fff" size={27}/>
            <span className='gradient-text'>LinkedIn</span>
        </a>
      </div>
      <div>
      <a href='https://ashur-kanwal-cv.herokuapp.com/' className='social-text' target='_blank' rel='noreferrer'>
            <SiAboutdotme color="#fff" size={27}/>
            <span className='gradient-text'>Resume</span>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia