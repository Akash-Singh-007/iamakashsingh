import React from 'react';
import Wave from '../../img/wave.png';
import './Footer.css';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Twitter from '@iconscout/react-unicons/icons/uil-twitter';

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>akashsingh777567@gmail.com</span>
            <div className="f-icons">
                <a target="_blank" href="https://www.instagram.com/aakashsatyendra/"><Instagram color='white' size='3rem'/></a>
                <a target="_blank" href="https://www.linkedin.com/in/akash-singh-a9b55b1b6/"><Linkedin color='white' size='3rem'/></a>
                <a target="_blank" href="https://github.com/aakashsatyendra"><Github color='white' size='3rem'/></a>
                <a target="_blank" href="https://twitter.com/aakashsatyendra"><Twitter color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer