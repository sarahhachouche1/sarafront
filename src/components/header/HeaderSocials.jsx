import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="hidden sm:flex flex-col items-center gap-3 absolute left-0 bottom-12 after:w-[1px] after:h-8  after:bg-colorPrimary">
      <a href="https://www.linkedin.com/in/sarah-hachouche/" target="__blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/sarahhachouche1" target="__blank">
        <BsGithub />
      </a>
      <a href="https://learn.microsoft.com/en-us/dotnet/" target="__blank">
        <FiDribbble />
      </a>
    </div>
  );
}

export default HeaderSocials