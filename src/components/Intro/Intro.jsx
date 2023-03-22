import React from 'react';
import './Intro.css';
import FloatingDiv from '../Partials/FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Crown from '../../img/crown.png';
import Thumbup from '../../img/thumbup.png';
import Glassesemoji from '../../img/glassesemoji.png';
import Akash from '../../img/akash2.png';
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';

const Intro = () => {

  const transition = {duration: 2, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white' : ''}}>Hy! I Am</span>
                <span>Akash Singh</span>
                <span>Frontend Developer Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora necessitatibus assumenda.</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <a href="#">
                    <img src={Github} alt="" />
                </a>
                <a href="#">
                    <img src={LinkedIn} alt="" />
                </a>
                <a href="#">
                    <img src={Instagram} alt="" />
                </a> 
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Akash} alt=""  style={{width:'180px'}}/>
            <motion.img 
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={Glassesemoji} alt="" />
            <motion.div
            initial={{top:'-4%' , left:'74%'}}
            whileInView={{left:'68%'}}
            transition={transition}
            style={{top:'-4%' , left:'68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            <motion.div 
            initial={{top:'18.4rem' , left:'9rem'}}
            whileInView={{left:'1rem'}}
            transition={transition}
            style={{top:'18.4rem' , left:'1rem'}}>
                <FloatingDiv image={Thumbup} txt1='Web' txt2='Designer'/>
            </motion.div>
            {/* blur divs */}
            <div className="blur" style={{background : "rgb(238 210 255)"}}></div>
            <div className="blur" style={{background : '#c1f5ff', top: '17rem', left: '-9rem', height: '11rem', width: '21rem'}}></div>
        </div>
    </div>
  )
}

export default Intro