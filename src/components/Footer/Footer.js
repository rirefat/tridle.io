import React from 'react';
import './Footer.css';
import { BsTwitter, BsLinkedin, BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer'>
            <h3>tridle</h3>    

            <div className="important-links">
                <ul>
                    <li><a href="#"></a>Services</li>
                    <li><a href="#"></a>Features</li>
                    <li><a href="#"></a>Testimonial</li>
                    <li><a href="#"></a>About</li>
                    <li><a href="#"></a>Career</li>
                    <li><a href="#"></a>FAQs</li>
                    <li><a href="#"></a>Contact</li>
                </ul>
            </div>   

            <div className="footer-bottom">
                <div className="copyright-text">© Tridle | All rights reserved.</div>
                <div className="social-links">
                    <ul>
                        <li><a target="_blank" href="#"><BsTwitter></BsTwitter></a></li>
                        <li><a target="_blank" href="http://www.linkedin.com/company/tridle-io"><BsLinkedin></BsLinkedin></a></li>
                        <li><a target="_blank" href="https://www.facebook.com/tridle.io"><BsFacebook></BsFacebook></a></li>
                        <li><a target="_blank" href="http://instagram.com/tridle.io"><BsInstagram></BsInstagram></a></li>
                        <li><a target="_blank" href="#"><BsGithub></BsGithub></a></li>
                    </ul>
                </div>
            </div>     
        </div>
    );
};

export default Footer;