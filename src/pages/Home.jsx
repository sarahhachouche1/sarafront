import React from 'react';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav'
import About from '../components/about/About'
import Experience from "../components/experience/Experience";
import Services from "../components/services/Services";
import Portfolio from "../components/portfolio/Portfolio";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Home = () => {


    return (
      <>
      <div className='overflow-x-hidden  '>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
       
      </div>
  
      </>
    )
  }
  
  export default Home;