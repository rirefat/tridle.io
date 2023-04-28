import React, { useState } from 'react';
import './FAQs.css';
import { BsChevronDown,BsChevronUp } from 'react-icons/bs';

const faqData = [
    {
        question: 'This is the question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fuga explicabo libero quae quidem accusamus provident laudantium harum velit, nesciunt dicta, assumenda aspernatur rem! Repudiandae expedita nam doloribus ullam sunt.'
    },
    {
        question: 'This is the question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fuga explicabo libero quae quidem accusamus provident laudantium harum velit, nesciunt dicta, assumenda aspernatur rem! Repudiandae expedita nam doloribus ullam sunt.'
    },
    {
        question: 'This is the question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fuga explicabo libero quae quidem accusamus provident laudantium harum velit, nesciunt dicta, assumenda aspernatur rem! Repudiandae expedita nam doloribus ullam sunt.'
    },
    {
        question: 'This is the question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fuga explicabo libero quae quidem accusamus provident laudantium harum velit, nesciunt dicta, assumenda aspernatur rem! Repudiandae expedita nam doloribus ullam sunt.'
    }
];

const FAQs = () => {
    const [accordion, setActiveAccordion] = useState(-1);
    const toggleAccordion = (index) => {
        if (index === accordion) {
            setActiveAccordion(-1);
            return;
        }
        setActiveAccordion(index)
    }

    return (
        <div className='faq-section' id='faqs'>
            <h3>FAQs</h3>
            <div className="accordion-container">
                {
                    faqData.map((item, index) => (
                        <div key={index} onClick={() => toggleAccordion(index)} className='single-accordion'>
                            <div className="main-faq">
                                <div className="faq-title">
                                    <p className={accordion === index ? "active-accordion" : " "}>{item.question}</p>
                                </div>
                                <div className="faq-desc">
                                    <p className={accordion === index ? "active-accordion" : "inactive-accordion"}>{item.answer}</p>
                                </div>
                            </div>
                            <span className="vertical">
                                {
                                    accordion === index ? <BsChevronUp></BsChevronUp> : <BsChevronDown></BsChevronDown>
                                }
                            </span>
                        </div>))
                }
                <div className="title">Title</div>
                <div className="desc">Description</div>
            </div>
        </div>
    );
};

export default FAQs;