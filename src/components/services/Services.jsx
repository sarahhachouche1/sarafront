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
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
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
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
          </ul>
        </article>

        {/* Content creation */}
        <article className="service bg-colorBgVariant rounded-b-[2rem] border border-solid border-colorPrimary h-fit hover:cursor-default hover:bg-transparent hover:border-colorPrimaryVariant transition-all duration-[400ms] ease-in">
          <div className="service__head bg-colorPrimary p-8 rounded-b-[2rem] shadow-[0_0_2rem_1rem_rgba(0,0,0,0.1)]">
            <h3 className="text-colorBg text-[1rem] text-center">
              Content Creation
            </h3>
          </div>

          <ul className="service__list p-8">
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li className="flex gap-4 mb-[0.8rem]">
              <BiCheck className="service__list-icon text-colorPrimary mt-[2px]" />
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services