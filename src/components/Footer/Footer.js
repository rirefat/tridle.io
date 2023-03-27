import React from 'react';
import './Footer.css';
import { BsTwitter, BsLinkedin, BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer'>
            <h3>Tridle</h3> 
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.</p>   
            
            <div className="important-links">
                <ul>
                    <li><a href="#services"></a>Services</li>
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
                        <li><a target="_blank" href="https://github.com/tridle-io"><BsGithub></BsGithub></a></li>
                    </ul>
                </div>
            </div>     
        </div>
    );
};

export default Footer;