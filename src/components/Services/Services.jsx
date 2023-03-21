import React from 'react'
import './Services.css'
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Partials/Card/Card';
import Resume from './resume.pdf';

const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <spane>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                <br/>
                fgnfgb dfgdf ipsum dolor sit amet
            </spane>
            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>

            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card
                emoji = {Heartemoji}
                heading = {'Design'}
                detail = {"sdfdfgk dfkjgdf kdfjhg dkdjfhg"}
                />
            </div>
            <div style={{top: '12rem', left: '-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"sdfdfgk dfkjgdf kdfjhg dkdjfhg"}
                />
            </div>
            <div style={{top: '19rem', left: '12rem'}}>
                <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {"sdfdfgk dfkjgdf kdfjhg dkdjfhg"}
                />
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services