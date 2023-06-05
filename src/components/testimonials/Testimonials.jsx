import React from 'react'


// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
   
    user: "Peter Fadoul",
    review:
      "Sarah has shown remarkable growth under my mentorship, demonstrating strong technical skills and a knack for problem-solving. Her dedication and passion for web development make them a standout student at Codi Tech.",
  },
  {
  
    user: "Hadeel Deeb",
    review:
      "Sarah possesses excellent communication and presentation skills, effectively conveying ideas and engaging with others. She also excel in teamwork, actively contributing and collaborating with her peers, making them a valuable asset to any project or group.",
  },
  {
    user: "Yasmine Reda",
    review:"Sarah is an outstanding programming teacher, providing clear explanations and creating an engaging learning environment for my child. Her patience and guidance have fostered my child's passion for programming. I highly recommend Sarah as a dedicated and effective programming instructor.",
  },
  {
    user: "Sara shmeiseni",
    review:
      "Working with Sarah on my portfolio was an absolute pleasure. Their attention to detail, creativity, and understanding of my brand resulted in a stunning portfolio that truly captures my style and engages my followers. I highly recommend Sarah for their exceptional design skills and ability to bring a vision to life",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5 className="text-base mb-3">Reviews from Clients</h5>
      <h2 className="text-2xl lg:text-3xl">Testimonials</h2>

      <Swiper
        className="container testimonials__container w-[90%] sm:w-[60%] lg:w-[40%] pb-[4rem]"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
      
        {data.map(({ image, user, review }, index) => {
          return (
            <SwiperSlide
              key={index}
              className="testimonial bg-colorBgVariant text-center p-[2rem] rounded-[2rem] select-none"
            >
              <div className="client__avatar w-[4rem] aspect-square overflow-hidden rounded-[50%] mx-auto mb-4 border-[0.4rem] border-solid border-colorPrimaryVariant">
                <img src={image} alt="" />
              </div>
              <h5 className="client__name">{user}</h5>
              <small className="client__review text-colorLight font-light block w-[90%] sm:w-[80%] mt-[0.8rem] mx-auto">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials