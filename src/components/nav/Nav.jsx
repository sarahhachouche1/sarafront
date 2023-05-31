import React from 'react'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav className="bg-colorNav w-max flex  py-3 px-7 z-[99] fixed bottom-4 left-1/2 -translate-x-1/2 gap-4 rounded-[3rem] backdrop-blur-lg ">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={`bg-transparent p-[0.9rem] rounded-[50%] flex text-colorLight tex-[1.1rem] hover:bg-colorNav ${
          activeNav === "#" ? "bg-colorBg text-colorWhite" : ""
        } `}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={`bg-transparent p-[0.9rem] rounded-[50%] flex text-colorLight tex-[1.1rem] hover:bg-colorNav ${
          activeNav === "#about" ? "bg-colorBg text-colorWhite" : ""
        }`}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={`bg-transparent p-[0.9rem] rounded-[50%] flex text-colorLight tex-[1.1rem] hover:bg-colorNav ${
          activeNav === "#experience" ? "bg-colorBg text-colorWhite" : ""
        }`}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={`bg-transparent p-[0.9rem] rounded-[50%] flex text-colorLight tex-[1.1rem] hover:bg-colorNav ${
          activeNav === "#services" ? "bg-colorBg text-colorWhite" : ""
        }`}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={`bg-transparent p-[0.9rem] rounded-[50%] flex text-colorLight tex-[1.1rem] hover:bg-colorNav ${
          activeNav === "#contact" ? "bg-colorBg text-colorWhite" : ""
        }`}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav