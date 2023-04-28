import React, { useState } from 'react';
import './FAQs.css';
import { BsChevronDown,BsChevronUp } from 'react-icons/bs';

const faqData = [
    {
        question: 'What is the expense of a brand-new website?',
        answer: "Website development is a customizable work. We design according to the requirement of the clients. Given the client's approach and the demand, our team will do the primary work. Then we can give you the basic idea of costing. So, now you know that it varies."
    },
    {
        question: 'How long does it take to build a website?',
        answer: 'For basic information websites with limited functionality, we often take one to three weeks starting from scratch till the end. But again, it can vary depending on the particular project.'
    },
    {
        question: 'Will you provide maintenance service for my site?',
        answer: 'Like anything, a website also needs care. Routine maintenance can be very vital for a smooth-going website. It can ensure the website’s security, traffic and so on. So, our team would love to help you with any support based on the situation.'
    },
    {
        question: 'Once the website is built, can I update or edit it myself?',
        answer: 'Of course, you can. With the basic knowledge of coding, you can do it. We also recommend that you update your site timely.'
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