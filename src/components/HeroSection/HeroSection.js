import React from 'react';
import './HeroSection.css';

import { AiOutlinePlayCircle } from 'react-icons/ai';

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <h1>We create the most <span className="highlighted">delightful</span> website for your brand</h1>
            <p>Pick and personalize a cover – in hardback or softback – with any text you like, then select the paper type you want inside. Good news: we’ve got lined, dotted and plain.</p>

            <div className="call-to-action">
                <button className="watch"><AiOutlinePlayCircle></AiOutlinePlayCircle>Watch us in action</button>
                <button className="contact">Get your own website</button>
            </div>
        </div>
    );
};

export default HeroSection;