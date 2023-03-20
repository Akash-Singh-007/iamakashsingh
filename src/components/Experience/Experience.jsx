import React from 'react';
import Acheivement from '../Acheivement/Acheivement';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience">
        <Acheivement numbers={'5+'} text1='Web' text2='Sites'/>
        <Acheivement numbers={'0'} text1='Web' text2='Apps'/>
        <Acheivement numbers={'0'} text1='Blogs' text2='Posted'/>
    </div>
  )
}

export default Experience