import React from 'react';
import './Testimonial.css';
import client1 from '../../images/clients/Avatar.png'
import { BsFillStarFill } from 'react-icons/bs';
import { BiLeftArrowAlt,BiRightArrowAlt } from 'react-icons/bi';

const Testimonial = () => {
    return (
        <div className='testimonial'>
            <h3>Our Client Says</h3>

            <div className="testimonial-container">
                <div className="ratings">
                    <span className="star"><BsFillStarFill></BsFillStarFill></span>
                    <span className="star"><BsFillStarFill></BsFillStarFill></span>
                    <span className="star"><BsFillStarFill></BsFillStarFill></span>
                    <span className="star"><BsFillStarFill></BsFillStarFill></span>
                    <span className="star"><BsFillStarFill></BsFillStarFill></span>
                </div>
                <div className="comments">
                    Good Creation Systems Ltd is a fully Digital solution providing company incorporated and registered under the corporate affair commission in July 20, 2022. We have a sole objective to improve digital transformation by strategically improving digital education and Building IT Solution for corporate organization in Nigeria.
                </div>
                <div className="bottom-section">
                    <div className="author">
                        <img src={client1} alt="" />
                        <div className="details">
                            <p className="name">Katherine Moss</p>
                            <p className="designation">Project Manager, Layers</p>
                        </div>
                    </div>
                    <div className="pagination">
                        <div className="left"><BiLeftArrowAlt></BiLeftArrowAlt></div>
                        <div className="right"><BiRightArrowAlt></BiRightArrowAlt></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;