import React from 'react'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Dental Clinic Website in Figma; MERN",
    github: "https://github.com/sarahhachouche1",
    demo: "https://main--whimsical-seahorse-c312f0.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Expense Management System ; ASP.net MVC ",
    github: "https://github.com/sarahhachouche1/Expense-Tracker",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "Codmetics Products Ecommerce; Mern ",
    github: "https://github.com/sarahhachouche1/Ecommerce-Cosmetics-Products",
    demo: "https://avon-skin-care.netlify.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Quiz Application; ASP.net web Api",
    github: "https://github.com/sarahhachouche1/CsharpQuiz",
    demo: "",
  },
  {
    id: 5,
    image: IMG5,
    title: " Ecommerce+Portfolio for Photographer; MERN",
    github: "https://github.com/sarahhachouche1?tab=repositories",
    demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "Course Enrollement System, a senior project presented to get my Bachelor Degree in Computer Science ifrom the Lebanese University",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
];


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="text-base mb-3">My Recent Work</h5>
      <h2 className="text-2xl lg:text-3xl">Portfolio</h2>

      <div className="container portfolio__container grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] lg:grid-cols-[repeat(3,1fr)] gap-4 sm:gap-[1.2rem] lg:gap-10">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article
              key={id}
              className="portfolio__item bg-colorBgVariant p-[1.2rem] rounded-[2rem] border border-solid border-transparent transition-all duration-[400ms] ease-in hover:border-colorPrimaryVariant hover:bg-transparent "
            >
              <div className="portfolio__item-image rounded-[1.5rem] overflow-hidden">
                <img src={image} alt={title} />
              </div>
              <h3 className="mt-[1.2rem] mb-[2rem]">{title}</h3>

              <div className="portfolio__item-cta flex gap-4 mb-4">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>

                <a href={demo} className="btn btn-primary " target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio