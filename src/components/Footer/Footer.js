import React from 'react';
import './Footer.css';
import { BsTwitter, BsLinkedin, BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

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
                    <li><Link to={'#'}></Link>Services</li>
                    <li><Link to={'#'}></Link>Features</li>
                    <li><Link to={'#'}></Link>Testimonial</li>
                    <li><Link to={'#'}></Link>About</li>
                    <li><Link to={'#'}></Link>Career</li>
                    <li><Link to={'#'}></Link>FAQs</li>
                    <li><Link to={'#'}></Link>Contact</li>
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