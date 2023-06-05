import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-colorPrimary py-[3rem] text-center text-[0.9rem] mt-[7rem]">
      <a
        href="#"
        className="footer__logo text-colorBg text-[2rem] font-[500] mb-[2rem] inline-block "
      >
        Ask Sarah
      </a>

      <ul className="permalinks flex flex-wrap justify-center gap-[1rem] sm:gap-[2rem] mt-0 mx-auto mb-[3rem] flex-col sm:flex-row">
        <li>
          <a className="text-colorBg" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="text-colorBg" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="text-colorBg" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="text-colorBg" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="text-colorBg" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="text-colorBg" href="#testimonials">
            Testimonials
          </a>
        </li>
        <li>
          <a className="text-colorBg" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <div className="footer__socials flex justify-center gap-[1rem] mb-[2.6rem] sm:mb-[4rem] ">
        <a
          className="text-colorWhite bg-colorBg p-[0.8rem] rounded-[0.7rem] flex border border-solid border-transparent hover:bg-transparent hover:text-colorBg hover:border-colorBg"
          href="https://facebook.com"
        >
          <FaFacebookF />
        </a>
        <a
          className="text-colorWhite bg-colorBg p-[0.8rem] rounded-[0.7rem] flex border border-solid border-transparent hover:bg-transparent hover:text-colorBg hover:border-colorBg"
          href="https://instagram.com"
        >
          <FiInstagram />
        </a>
        <a
          className="text-colorWhite bg-colorBg p-[0.8rem] rounded-[0.7rem] flex border border-solid border-transparent hover:bg-transparent hover:text-colorBg hover:border-colorBg"
          href="https://twitter.com"
        >
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright mb-[4rem] text-colorBg ">
        <small>&copy; Sarah Hachouche. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer