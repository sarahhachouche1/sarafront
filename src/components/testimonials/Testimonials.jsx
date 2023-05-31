import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    image: AVTR1,
    user: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus modi, neque cum dignissimos, dolorem quibusdam soluta recusandae voluptates praesentium fuga voluptas non eos sequi sunt et officia, doloremque commodi?",
  },
  {
    image: AVTR2,
    user: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus modi, neque cum dignissimos, dolorem quibusdam soluta recusandae voluptates praesentium fuga voluptas non eos sequi sunt et officia, doloremque commodi?",
  },
  {
    image: AVTR3,
    user: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus modi, neque cum dignissimos, dolorem quibusdam soluta recusandae voluptates praesentium fuga voluptas non eos sequi sunt et officia, doloremque commodi?",
  },
  {
    image: AVTR4,
    user: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus modi, neque cum dignissimos, dolorem quibusdam soluta recusandae voluptates praesentium fuga voluptas non eos sequi sunt et officia, doloremque commodi?",
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