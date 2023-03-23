import React from 'react';
import './App.css';
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
    </div>
  );
};

export default App;