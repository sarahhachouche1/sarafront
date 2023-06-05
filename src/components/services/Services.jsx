import React from 'react'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5 className="text-base mb-3">What I Offer</h5>
      <h2 className="text-2xl lg:text-3xl">Services</h2>

      <div className="container services__container grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] lg:grid-cols-[repeat(3,1fr)] gap-6 sm:gap-8 lg:gap-12">
        {/* UI / UX Design */}
        <article className="service bg-colorBgVariant rounded-b-[2rem] border border-solid border-colorPrimary h-auto lg:h-fit hover:cursor-default hover:bg-transparent hover:border-colorPrimaryVariant transition-all duration-[400ms] ease-in">
          <div className="service__head bg-colorPrimary p-8 rounded-b-[2rem] shadow-[0_0_2rem_1rem_rgba(0,0,0,0.1)]">
            <h3 className="text-colorBg text-[1rem] text-center">
              UI/UX Design
            </h3>
          </div>

          <ul className="service__list p-8">
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
              Comprehensive Curriculum: Designing a well-structured and comprehensive curriculum for teaching data structures and algorithms.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
              Hands-on Practice: Incorporating hands-on programming exercises and coding challenges.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
              Problem Solving: Guiding students in developing problem-solving skills by using appropriate data structures and algorithms.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
              Code Review and Feedback: Providing constructive feedback and conducting code reviews.
              </p>
            </li>
           
          </ul>
        </article>

        {/* Web Dev */}
        <article className="service bg-colorBgVariant rounded-b-[2rem] border border-solid border-colorPrimary h-fit hover:cursor-default hover:bg-transparent hover:border-colorPrimaryVariant transition-all duration-[400ms] ease-in">
          <div className="service__head bg-colorPrimary p-8 rounded-b-[2rem] shadow-[0_0_2rem_1rem_rgba(0,0,0,0.1)]">
            <h3 className="text-colorBg text-[1rem] text-center">
              Web Development
            </h3>
          </div>

          <ul className="service__list p-8">
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
              Custom Website Development: Offering bespoke website development solutions.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
              E-commerce Development: Building robust and scalable e-commerce platforms, integrating secure payment gateways.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
              Content Management Systems (CMS): Expertise in developing CMS-based websites.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
              Website Optimization: Implementing best practices to optimize website speed, performance, and search engine visibility.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
              Mobile Application Development: Extending web services to mobile platforms, crafting responsive and feature-rich mobile applications 
              </p>
            </li>
          </ul>
        </article>

     
        <article className="service bg-colorBgVariant rounded-b-[2rem] border border-solid border-colorPrimary h-fit hover:cursor-default hover:bg-transparent hover:border-colorPrimaryVariant transition-all duration-[400ms] ease-in">
          <div className="service__head bg-colorPrimary p-8 rounded-b-[2rem] shadow-[0_0_2rem_1rem_rgba(0,0,0,0.1)]">
            <h3 className="text-colorBg text-[1rem] text-center">
            Programming Mentor for Children
            </h3>
          </div>

          <ul className="service__list p-8">
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
              Curriculum Development: Designing age-appropriate and engaging programming curricula.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
              Individualized Instruction: Assessing children's learning needs and providing personalized guidance.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
              Collaborative Learning: Encouraging teamwork and collaboration among children.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
              Inspiring Passion for Coding: Instilling a love for coding and technology in children .
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services