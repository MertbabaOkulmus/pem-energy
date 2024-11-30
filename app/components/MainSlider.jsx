"use client"
import React from 'react'
import enerjiPaneli from "../assets/enerjiPaneli.jpg";
import slayt1 from "../assets/slayt(1).jpg";
import slayt2 from "../assets/slayt(2).jpg";
import slayt3 from "../assets/slayt(3).jpg";
import slayt4 from "../assets/slayt(4).jpg";
import Image from "next/image.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function MainSlider() {
    return (
        <div>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
            >
                <SwiperSlide><Image src={enerjiPaneli} className=" w-full h-[500px]" /></SwiperSlide>
                <SwiperSlide><Image src={slayt1} className=" w-full h-[500px]" /></SwiperSlide>
                <SwiperSlide><Image src={slayt2} className=" w-full h-[500px]" /></SwiperSlide>
                <SwiperSlide><Image src={slayt3} className=" w-full h-[500px]" /></SwiperSlide>
                <SwiperSlide><Image src={slayt4} className=" w-full h-[500px]" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MainSlider
