import React from 'react';
import Contact from '../Contact/Contact';
import HeroSection from '../HeroSection/HeroSection';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import FAQs from '../FAQs/FAQs';
import Team from '../Team/Team';
import WorkProcess from '../WorkProcess/WorkProcess';

const Home = () => {
    return (
        <div className='home'>
            <HeroSection></HeroSection>
            <Portfolio></Portfolio>
            <Services></Services>
            <WorkProcess></WorkProcess>
            <Testimonial></Testimonial>
            {/* <Team></Team> */}
            <FAQs></FAQs>
            <Contact></Contact>
        </div>
    );
};

export default Home; 