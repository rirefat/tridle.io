import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
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
            </div>
        </div>
    );
};

export default Contact;