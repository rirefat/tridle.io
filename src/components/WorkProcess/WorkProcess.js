import React from 'react';
import './WorkProcess.css';

import { BsChatLeftText, BsSearch } from 'react-icons/bs';
import { SiAltiumdesigner } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

const steps = [
    {
        title: 'Understanding User Needs',
        desc: "We conduct detailed discussions with clients to gain an in-depth understanding of the project's goals and requirements.",
        icon: BsChatLeftText
    },
    {
        title: 'Background Research',
        desc: "We conduct thorough research about established works, market trends, and potential challenges to ensure project’s success.",
        icon: BsSearch
    },
    {
        title: 'Designing The Experience',
        desc: "With deep understanding of user centered design and industry best practices, we design captivating interfaces that are easy to navigate and leaves a lasting impression on your visitors.",
        icon: SiAltiumdesigner
    },
    {
        title: 'Development & Testing',
        desc: "At this stage, we turn the approved design into a live website and rigorously test it to ensure optimal performance before handing it over to our customer.",
        icon: FaCode
    },
];

const WorkProcess = () => {
    return (
        <div className='work-process'>
            <h3>Our Work Process</h3>
            <p>We ensure that our clients are satisfied with a big smile. We design, develop, test and get your project done. To establish a striking, memorable and impactful digital presence just give us a knock.</p>

            <div className="work-steps-container">
                {
                    steps.map((step, index)=>(
                        <div className="single-step" key={index}>
                            <span className="icon">{<step.icon/>}</span>
                            <h4>{step.title}</h4>
                            <p className='step-description'>{step.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default WorkProcess;