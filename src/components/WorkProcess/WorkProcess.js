import React from 'react';
import './WorkProcess.css';

import { BsFillChatRightFill, BsSearch } from 'react-icons/bs';
import { SiAltiumdesigner } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

const steps = [
    {
        title: 'Understanding User Needs',
        desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.',
        icon: BsFillChatRightFill
    },
    {
        title: 'Background Research',
        desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.',
        icon: BsSearch
    },
    {
        title: 'Designing The Experience',
        desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.',
        icon: SiAltiumdesigner
    },
    {
        title: 'Development & Testing',
        desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.',
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