import React from 'react'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {AiFillCode} from "react-icons/ai"
import { VscFolderLibrary } from "react-icons/vsc";


const About = () => {
  return (
    <section id="about" className="section">
      <h5 className="text-base mb-3">Get To Know</h5>
      <h2 className="text-2xl lg:text-3xl">About Me</h2>

      <div className="container about__container grid sm:grid-cols-[1fr] lg:grid-cols-[35%_50%] sm:gap-0 lg:gap-[15%]  ">
        <div className="about__me w-[65%] sm:w-1/2 lg:w-full sm:mt-[2rem] mt-0 mx-auto mb-12 sm:mx-auto sm:mb-[4rem] aspect-square rounded-[2rem]  grid place-items-center bg-gradient-to-tr from-colorPrimary to-transparent">
          <div className="about__me-image rounded-[2rem] overflow-hidden origin-center rotate-[10deg] hover:rotate-0 transition-all duration-[350ms] ease-in opacity-60">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content text-center sm:text-left">
          <div className="about__cards grid grid-cols-[1fr_1fr] sm:grid-cols-[repeat(3,1fr)] gap-4 sm:gap-6">
            <article className="about__card bg-colorBgVariant border border-solid border-transparent rounded-[1rem] p-8 text-center flex flex-col items-center gap-2 hover:cursor-default hover:bg-transparent hover:border-colorPrimaryVariant transition-all duration-[400ms] ease-in   ">
              <FaAward className="about__icon text-colorPrimary text-[1.4rem] mb-4" />
              <h5 className="text-[0.95rem]">Experience</h5>
              <small className="text-[0.7rem] text-colorLight">
                2+ Years Working
              </small>
            </article>

            <article className="about__card bg-colorBgVariant border border-solid border-transparent rounded-[1rem] p-8 text-center  flex flex-col items-center gap-2 hover:cursor-default hover:bg-transparent hover:border-colorPrimaryVariant transition-all duration-[400ms] ease-in">
              <AiFillCode className="about__icon text-colorPrimary text-[1.4rem] mb-4" />
              <h5 className="text-[0.95rem]">Problem solving</h5>
              <small className="text-[0.7rem] text-colorLight">
              <a href="https://leetcode.com/sarahhachouche/" target="__blank">
                 LeetCode 
              </a>
              </small>
            </article>

            <article className="about__card bg-colorBgVariant border border-solid border-transparent rounded-[1rem] p-8 text-center  flex flex-col items-center gap-2 hover:cursor-default hover:bg-transparent hover:border-colorPrimaryVariant transition-all duration-[400ms] ease-in">
              <VscFolderLibrary className="about__icon text-colorPrimary text-[1.4rem] mb-4" />
              <h5 className="text-[0.95rem]">Project Management</h5>
              <small className="text-[0.7rem] text-colorLight">
                Agile Methodology
              </small>
            </article>
          </div>

          <p className="my-[1.5rem] mx-0 sm:mt-4 sm:mx-0 sm:mb-[1.5rem] lg:mt-8 lg:mx-0 lg:mb-[2.6rem] text-colorLight">
          Experienced multi-language software developer with strong problem-solving skills. Successfully solved coding challenges on platforms like CodeSignal, HackerRank, and LeetCode. Proficient in Agile project management methodologies.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About