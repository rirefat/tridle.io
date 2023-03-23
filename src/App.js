import React from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import HeroSection from './components/HeroSection/HeroSection';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';

const App = () => {
  return (
    <div className='container'>
      <HeroSection></HeroSection>
      <Portfolio></Portfolio>
      <Services></Services>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default App;