import React from 'react';
import Contact from '../Contact/Contact';
import HeroSection from '../HeroSection/HeroSection';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='home'>
            <HeroSection></HeroSection>
            <Portfolio></Portfolio>
            <Services></Services>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home; 