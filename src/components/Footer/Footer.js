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
            <h3>Tridle</h3> 
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.</p>   
            
            <div className="important-links">
                <ul>
                    <li><a href="/home/#services">Services</a></li>
                    <li><Link to={'/home/#features'}>Features</Link></li>
                    <li><Link to={'/home/#testimonial'}>Testimonial</Link></li>
                    <li><Link to={'/home/#about'}>About</Link></li>
                    <li><Link to={'/home/#career'}>Career</Link></li>
                    <li><Link to={'/home/#faqs'}>FAQs</Link></li>
                    <li><Link to={'/home/#contact_us'}>Contact</Link></li>
                </ul>
            </div>   

            <div className="footer-bottom">
                <div className="copyright-text">© Tridle | All rights reserved.</div>
                <div className="social-links">
                    <ul>
                        <li><Link target="_blank" to={'#'}><BsTwitter></BsTwitter></Link></li>
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