import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zvne14q",
        "template_rsduesl",
        form.current,
        "nKPvrOyPC6XZ0ErQ6"
      )

      e.target.reset()
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5 className="text-base mb-3">Get In Touch</h5>
      <h2 className="text-2xl lg:text-3xl">Contact Me</h2>

      <div className="container contact__container max-w-lg lg:max-w-none w-[90%] lg:w-[58%] grid grid-cols-[1fr] lg:grid-cols-[30%_58%] gap-[2rem] lg:gap-[12%]">
        <div className="contact__options flex flex-col gap-[1.2rem]">
          <article className="contact__option bg-colorBgVariant p-[1.2rem] rounded-[1.2rem] text-center border border-solid border-transparent hover:bg-transparent hover:border-colorPrimaryVariant transition-all duration-[400ms] ease-in .">
            <MdOutlineEmail className=" text-[1.5rem] mb-[0.5rem] mx-auto" />
            <h4>Email</h4>
            <h5>sarahhachouche7@gmail</h5>
            <a
              href="mailto:wdilantha66@gmail.com"
              target="_blank"
              className="mt-[0.7rem] inline-block text-[0.8rem]"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option bg-colorBgVariant p-[1.2rem] rounded-[1.2rem] text-center border border-solid border-transparent hover:bg-transparent hover:border-colorPrimaryVariant transition-all duration-[400ms] ease-in">
            <RiMessengerLine className=" text-[1.5rem] mb-[0.5rem] mx-auto" />
            <h4>Messenger</h4>
            <h5>Sarah hachouche</h5>
            <a
              href="https://www.facebook.com/sarahhachouche/"
              target="_blank"
              className="mt-[0.7rem] inline-block text-[0.8rem]"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option bg-colorBgVariant p-[1.2rem] rounded-[1.2rem] text-center border border-solid border-transparent hover:bg-transparent hover:border-colorPrimaryVariant transition-all duration-[400ms] ease-in">
            <BsWhatsapp className=" text-[1.5rem] mb-[0.5rem] mx-auto" />
            <h4>Whatsapp</h4>
            <h5>+961 71 071 962</h5>
            <a
              href="https://api.whatsapp.com/send?phone+94721089721"
              target="_blank"
              className="mt-[0.7rem] inline-block text-[0.8rem]"
            >
              Send a message
            </a>
          </article>
        </div>

        <form className="flex flex-col gap-[1.2rem]" ref={form} onSubmit={sendEmail}>
          <input
            className="w-[100%] p-[1.5rem] rounded-[0.5rem] bg-transparent border-[2px] border-solid border-colorPrimaryVariant resize-none text-colorWhite"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className="w-[100%] p-[1.5rem] rounded-[0.5rem] bg-transparent border-[2px] border-solid border-colorPrimaryVariant resize-none text-colorWhite"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="w-[100%] p-[1.5rem] rounded-[0.5rem] bg-transparent border-[2px] border-solid border-colorPrimaryVariant resize-none text-colorWhite"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact