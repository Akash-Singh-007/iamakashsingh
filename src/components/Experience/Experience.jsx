import React from 'react';
import Acheivement from '../Partials/Acheivement/Acheivement';
import { themeContext } from "../../Context";
import { useContext } from "react";
import './Experience.css';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='experience'>
        <Acheivement numbers={'5+'} text1='Web' text2='Sites'/>
        <Acheivement numbers={'0'} text1='Web' text2='Apps'/>
        <Acheivement numbers={'0'} text1='Blogs' text2='Posted'/>
    </div>
  )
}

export default Experience