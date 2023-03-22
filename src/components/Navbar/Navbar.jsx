import React from 'react'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll';
import { themeContext } from "../../Context";
import { useContext } from "react";
import './Navbar.css'

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Akash</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{ listStyleType: "none" }}>
                    <li>
                        <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="services" spy={true} smooth={true}>
                            Serivces
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" spy={true} smooth={true}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="portfolio" spy={true} smooth={true}>
                            Protfolio
                        </Link>
                    </li>
                </ul>
            </div>
            <button className="button n-button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar