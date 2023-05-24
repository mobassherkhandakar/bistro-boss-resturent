import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const [rivews, setRivews] = useState([]);
  useEffect(() => {
    fetch("reviwe.json")
      .then((res) => res.json())
      .then((data) => {
        setRivews(data);
      });
  }, []);
  return (
    <section className="my-8">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {rivews.map((rivew) => (
            <SwiperSlide key={rivew._id}>
              <div className="flex flex-col items-center my-16 mx-24">
              <Rating
                style={{ maxWidth: 180 }}
                value={3}
                readOnly
              />
                <p className="my-8">{rivew.details}</p>
                <h2 className="text-orange-400 text-3xl">{rivew.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
