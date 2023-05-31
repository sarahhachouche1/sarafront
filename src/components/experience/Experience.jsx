import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="text-base mb-3">What Skills I have</h5>
      <h2 className="text-2xl lg:text-3xl">My Experience</h2>

      <div className="experience__container container grid sm:grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-4 lg:gap-8 ">
        {/* frontend */}
        <div className="experience__frontend bg-colorBgVariant w-[100%] sm:w-[80%] lg:w-[100%] py-8 px-4 sm:p-8 lg:py-[2.4rem] lg:px-[5rem] sm:my-0 sm:mx-auto rounded-[2rem]  border border-solid border-transparent hover:bg-transparent hover:border-colorPrimaryVariant cursor-default transition-all duration-[400ms] ease-in">
          <h3 className="text-center mb-8 text-colorPrimary">
            Frontend Development
          </h3>
          <div className="experience__content grid grid-cols-[1fr_1fr]  gap-y-[2rem] sm:p-4 lg:p-0 ">
            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>HTML</h4>
                <small className="text-colorLight ">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>CSS</h4>
                <small className="text-colorLight ">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-colorLight ">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-colorLight ">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>Syncfusion Blazor</h4>
                <small className="text-colorLight ">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>React</h4>
                <small className="text-colorLight ">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* backend */}
        <div className="experience__backend bg-colorBgVariant w-[100%] sm:w-[80%] lg:w-[100%] py-8 px-4 sm:p-8 lg:py-[2.4rem] lg:px-[5rem] sm:my-0 sm:mx-auto rounded-[2rem]  border border-solid border-transparent hover:bg-transparent hover:border-colorPrimaryVariant cursor-default transition-all duration-[400ms] ease-in">
          <h3 className="text-center mb-8 text-colorPrimary">
            Backend Development
          </h3>
          <div className="experience__content grid grid-cols-[1fr_1fr]  gap-y-[2rem] sm:p-4 lg:p-0">
          <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>C#</h4>
                <small className="text-colorLight ">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>Dotnet core</h4>
                <small className="text-colorLight ">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>Node JS</h4>
                <small className="text-colorLight ">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>Node JS</h4>
                <small className="text-colorLight ">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-colorLight ">Intermediate</small>
              </div>
            </article>
            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>PHP</h4>
                <small className="text-colorLight ">Intermediate</small>
              </div>
            </article>
            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>Laravel</h4>
                <small className="text-colorLight ">Bsic</small>
              </div>
            </article>
            <article className="experience__details flex gap-4">
              <BsPatchCheckFill className=" mt-[6px] text-colorPrimary" />
              <div>
                <h4>Python</h4>
                <small className="text-colorLight ">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience