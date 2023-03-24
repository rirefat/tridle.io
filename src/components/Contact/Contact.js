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
                    <div>
                        <input required className='name-field' type="text" placeholder='Your Name' />
                        <input required className='email-number-field' type="text" name="email-phone" id="email_phone" placeholder='Email/ Phone' />
                    </div>
                    <input required className='description-field' type="text" name="description" id="description" placeholder='Tell us briefly about your project/company' />

                    <input type="submit" value="Submit" className='submit-btn' />
                </form>

                <div className="divider">
                    <div className="horizontal-bar"></div>
                    <p className='or-section'>or contact us</p>
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