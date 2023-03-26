import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';

import { FiArrowUpCircle } from 'react-icons/fi';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className='container'>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Portfolio></Portfolio>
      <Services></Services>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>

      <ScrollToTop 
        smooth
        color={"#BEE329"}
        top={30}
        component={<FiArrowUpCircle style={{ fontSize: "1.5rem" }}></FiArrowUpCircle>}
      />
    </div>
  );
};

export default App;