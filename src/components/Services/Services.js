import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className='services-section' id='services'>
            <h3>Our Services</h3>
            <p>Here at Tridle we focus on markets where technology & capital can unlock long-term value and drive economic growth.</p>
            <div className="services-container">
                <div className="ui-ux">
                    <h4>UI/UX Design</h4>
                    <p>Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.</p>
                </div>
                <div className="web-dev">
                    <h4>UI/UX Design</h4>
                    <p>Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;