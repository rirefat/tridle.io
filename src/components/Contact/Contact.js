import React from 'react';
import './Contact.css';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
    return (
        <div className='contact' id='contact_us'>
            <div className="contact-container">
                <h3>Ready to get your own awesome website?</h3>
                <p>Give us your phone number/email, and we will contact you to discuss the project</p>

                <form className='contact-form'>
                    <input type="text" name="email-phone" id="email_phone" placeholder='* Phone/ Email' required/>
                    {/* <input type="text" name="project-description" id="project_description" placeholder='Tell us briefly about your project/company (optional)'/> */}
                    <textarea name="project_description" id="project_description" placeholder='Tell us briefly about your project/company (optional)'></textarea>

                    <input type="submit" value="Send Message" className='submit-btn'/>
                </form>

                <div className="divider">
                    <div className="horizontal-bar"></div>
                    <p className='or-section'>or</p>
                    <div className="horizontal-bar"></div>
                </div>

                <div className="contact-info">
                    <div>
                        <p className="icon"><BsTelephone></BsTelephone></p>
                        <a href="tel:+8801765215167">+880-1765-215167</a>
                    </div>
                    <div>
                        <p className="icon"><HiOutlineMail></HiOutlineMail></p>
                        <a href="mailto:contact@tridle.io">contact@tridle.io</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;