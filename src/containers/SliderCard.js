import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const createSlide = () => {
    return (
        <SwiperSlide>
          <img className="img" alt="inislide"/>
        </SwiperSlide>
    )
}

const SliderCard = () => {
    return (
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {createSlide()}
        {createSlide()}
        {createSlide()}
      </Swiper>
    );
}

export default SliderCard;