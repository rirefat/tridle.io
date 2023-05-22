import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className='services-section' id='services'>
            <h3>Our Services</h3>
            <p>We ensure that our clients are satisfied with a big smile. We design, develop, test and get your project done. To establish a striking, memorable and impactful digital presence just give us a knock.</p>
            <div className="services-container">
                <div className="ui-ux single-service">
                    <span>
                        <h4>UI/UX Design</h4>
                        <p>Delightful and exceptional design is at the core of what we do. Our team specializes in data-driven approach to design and create user-centered interfaces that are both aesthetically pleasing and intuitive to use.</p>
                    </span>
                </div>
                <div className="web-dev single-service">
                    <span>
                        <h4>Website Development</h4>
                        <p>Our team offers comprehensive website development services using the latest No-Code-Tools like WordPress, Webflow, and Framer, as well as traditional methods such as React, HTML, CSS & JavaScript to fit your specific needs.</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Services;