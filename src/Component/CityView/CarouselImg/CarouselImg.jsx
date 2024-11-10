import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";



import ImgOne from "./Slider-Img/ImgOne";
import ImgTwo from "./Slider-Img/ImgTwo";
import ImgThree from "./Slider-Img/ImgThree";
import ImgFwo from "./Slider-Img/ImgFwo";
import ImgFive from "./Slider-Img/ImgFive";

import styles from "./CarouselImg.module.css"

const CarouselImg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={styles.containerSlider}>
      <Slider {...settings}>
        <div>
          <h3><ImgOne /></h3>
        </div>
        <div>
          <h3><ImgTwo /></h3>
        </div>
        <div>
          <h3><ImgThree /></h3>
        </div>
        <div>
          <h3><ImgFwo /></h3>
        </div>
        <div>
          <h3><ImgFive /></h3>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselImg
