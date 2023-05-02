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
                        <p>Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.</p>
                    </span>
                </div>
                <div className="web-dev single-service">
                    <span>
                        <h4>Website Development</h4>
                        <p>Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Services;