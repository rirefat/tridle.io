import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return (
    <div className='container'>
      <HeroSection></HeroSection>
      <Portfolio></Portfolio>
    </div>
  );
};

export default App;