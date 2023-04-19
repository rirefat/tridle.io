import React from 'react';
import './HeroSection.css';

import { AiOutlinePlayCircle } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    // Link Navigation function
    const navigate=useNavigate();
    const handleNavigate=(destination)=>{
        navigate(`${destination}`)
    }

    return (
        <div className='hero-section'>
            <h1>We create the most <span className="highlighted">delightful</span> website for your brand</h1>
            <p>Let us help you create an unforgettable digital presence for your brand.</p>

            <div className="call-to-action">
                <a href="#"><button>Get Your Own Website <span className="btn-icon"><BsArrowRight></BsArrowRight></span></button></a>
            </div>
        </div>
    );
};

export default HeroSection;