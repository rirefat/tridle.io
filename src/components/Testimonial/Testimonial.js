import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import client1 from '../../images/clients/Avatar.png'
import { BsFillStarFill } from 'react-icons/bs';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, []);
    console.log(testimonials);

    const activeSlide = testimonials[activeIndex];
    console.log(activeSlide);

    const handlePrev =()=>{
        if(activeIndex === 0){
            setActiveIndex(testimonials.length - 1)
        }
        else{
            setActiveIndex((oldIndex)=> oldIndex - 1);
        }
    }

    const handleNext =()=>{
        if(activeIndex >= testimonials.length - 1){
            setActiveIndex(0);
        }
        else{
            setActiveIndex((oldIndex)=> oldIndex + 1);
        }
    }

    return (
        <div className='testimonial' id='testimonial'>
            <h3>Our Clients Love Us!</h3>

            <div className="testimonial-container">
                <SwitchTransition>
                    <CSSTransition>
                        <div className="testimonial-info">
                            <div className='ratings'>
                                <span className='star'><AiFillStar></AiFillStar></span>
                                <span className='star'><AiFillStar></AiFillStar></span>
                                <span className='star'><AiFillStar></AiFillStar></span>
                                <span className='star'><AiFillStar></AiFillStar></span>
                                <span className='star'><AiFillStar></AiFillStar></span>
                            </div>
                            <div className="comments">
                                <p>{activeSlide?.desc}</p>
                            </div>
                            <div className='bottom-section'>
                                <div className="author">
                                    <img src={activeSlide?.imgUrl} alt="" />
                                    <div>
                                        <h2 className="name">{activeSlide?.name}</h2>
                                        <p className='designation'>{activeSlide?.title}</p>
                                    </div>
                                </div>
                                {/* <div className="pagination">
                                    <div
                                        className="left prev"
                                        onClick={handlePrev}
                                        role='button'
                                        tabIndex={0}
                                        onKeyDown={handlePrev}
                                    ><BiLeftArrowAlt></BiLeftArrowAlt></div>
                                    <div
                                        className="right next"
                                        onClick={handleNext}
                                        role='button'
                                        tabIndex={0}
                                        onKeyDown={handleNext}
                                    ><BiRightArrowAlt></BiRightArrowAlt></div>
                                </div> */}
                            </div>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
    );
};

export default Testimonial;

// Final