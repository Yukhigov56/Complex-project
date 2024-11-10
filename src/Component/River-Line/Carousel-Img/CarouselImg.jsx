import React from "react";
import Slider from "react-slick";

import style from "./CarouselImg.module.css"

import Img1 from "./Img/Img1";
import Img2 from "./Img/Img2";
import Img3 from "./Img/Img3";
import Img4 from "./Img/Img4"; 
import Img5 from "./Img/Img5";
import Img6 from "./Img/Img6";


const CarouselImg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '340px',
    focusOnSelect: true,
  };
  return (
    <Slider className={style.slider} {...settings}>
      <div className={style.blockImg}>
        <Img1 />
      </div>
      <div className={style.blockImg}>
        <Img2 />
      </div>
      <div className={style.blockImg}>
        <Img3 />
      </div>
      <div className={style.blockImg}>
        <Img4 />
      </div>
      <div className={style.blockImg}>
       <Img5 />
      </div>
      <div className={style.blockImg}>
       <Img6 />
      </div>
    </Slider>
  );
}

export default CarouselImg