import React, { useState } from 'react';
import './FAQs.css';
import { BsChevronDown,BsChevronUp } from 'react-icons/bs';

const faqData = [
    {
        question: 'How much do you charge?',
        answer: "It depends on the project complexity and other factors. But we do take your budget into consideration before sending a quote."
    },
    {
        question: 'How long does it take to build a website?',
        answer: 'It usually takes us 2 to 3 weeks from taking the project to website delivery for simple single page website. But for more complex sites it might take longer.'
    },
    {
        question: 'Which platform do you use to build website?',
        answer: 'We utilize both traditional method to develop website by using HTML, CSS Javascipt and React and also by using no code tools such as Wordpress and Framer.'
    },
    {
        question: 'Will you provide maintenance service for my site? ',
        answer: 'Yes, we provide maintenance service for your website for FREE for the first 3 month. After that, if you need help with anything, you can still reach out to us!'
    },
    {
        question: 'Once the website is live, can I update or edit it myself?',
        answer: 'Yes, you can update the contents of your website from a simple dashboard if you wish. But if you want to update the layout/design of your website, you will need to contact us.'
    },
    {
        question: 'Are domain and hosting included? If not, how much will they cost?',
        answer: 'Domain and hosting charge is not included in our service. But if you wish we can suggest your the best domain/hosting service provider and you can even have us buy it on your behalf if you wish.'
    },
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
                {/* <div className="title">Title</div>
                <div className="desc">Description</div> */}
            </div>
            <p className='faq-bottom-text'>If you have any more questions. Please feel free to contact.</p>
        </div>
    );
};

export default FAQs;