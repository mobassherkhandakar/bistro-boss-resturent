import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";

const Catagory = () => {
  return (
    <>
    <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={'ORDER ONLINE'}></SectionTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h2 className="text-4xl text-center uppercase -mt-12">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h2 className="text-4xl text-center uppercase -mt-12">Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h2 className="text-4xl text-center uppercase -mt-12">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h2 className="text-4xl text-center uppercase -mt-12">desserts</h2>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Catagory;
