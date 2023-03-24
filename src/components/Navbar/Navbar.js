import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';

import { BiMenuAltRight } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="Logo" />

            <div className="nav-menu">
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
            <button>Contact Us</button>
            <div className="toggle-btn">
                <BiMenuAltRight></BiMenuAltRight>
                <MdClose></MdClose>
            </div>
        </div>
    );
};

export default Navbar;