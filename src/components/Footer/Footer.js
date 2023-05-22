import React from 'react';
import './Footer.css';
import { BsTwitter, BsLinkedin, BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    // Link Navigation function
    const navigate=useNavigate();
    const handleNavigate=(destination)=>{
        navigate(`${destination}`)
    }

    return (
        <div className='footer'>
            <h3 id='about'>Tridle</h3> 
            <hr />
            <p>Tridle is a web design & development agency run by a bunch of young and enthusiastic professionals. Baking numerous ideas with proper implementation, we ensure that our clients are satisfied with a big smile. We design, develop, test and get your project done. To establish a striking, memorable and impactful digital presence just give us a knock. Tell us about your dream project and we will handle the rest.</p>   
            
            <div className="important-links">
                <ul>
                    <li><a href="/home/#services">Services</a></li>
                    <li><Link to={'/home/#features'}>Features</Link></li>
                    <li><Link to={'/home/#testimonial'}>Testimonial</Link></li>
                    {/* <li><Link to={'/home/#career'}>Career</Link></li> */}
                    <li><Link to={'/home/#faqs'}>FAQs</Link></li>
                    <li><Link to={'/home/#contact_us'}>Contact</Link></li>
                </ul>
            </div>   

            <div className="footer-bottom">
                <div className="copyright-text">© Tridle | All rights reserved.</div>
                <div className="social-links">
                    <ul>
                        <li><Link target="_blank" to={'https://twitter.com/tridle_io'}><BsTwitter></BsTwitter></Link></li>
                        <li><Link target="_blank" to={'http://www.linkedin.com/company/tridle-io'}><BsLinkedin></BsLinkedin></Link></li>
                        <li><Link target="_blank" to={"https://www.facebook.com/tridle.io"}><BsFacebook></BsFacebook></Link></li>
                        <li><Link target="_blank" to={"http://instagram.com/tridle.io"}><BsInstagram></BsInstagram></Link></li>
                        <li><Link target="_blank" to={"https://github.com/tridle-io"}><BsGithub></BsGithub></Link></li>
                    </ul>
                </div>
            </div>     
        </div>
    );
};

export default Footer;