import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import JK from "../../img/jkenterprise.png";
import Keeper from "../../img/keeper.png";
import MHC from "../../img/mhc.png";
import Dice from "../../img/dice.png";
import Drum from "../../img/drum.png";

import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode? 'white' : ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={JK} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Dice} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Drum} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MHC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Keeper} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;