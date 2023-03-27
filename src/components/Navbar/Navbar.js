import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';
import { motion, AnimatePresence } from "framer-motion";
import { BiMenuAltRight } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // State control for opening flex menu
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }

    // Animation Part
    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                delay: 1.2
            }
        }
    }

    // Link Navigation function
    const navigate=useNavigate();
    const handleNavigate=(destination)=>{
        navigate(`/${destination}`)
    }
   

    return (
        <div className='navbar'>
            <img src={logo} alt="Logo" onClick={()=>{handleNavigate('home')}}/>

            <div className="nav-menu">
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
            <button >Contact Us</button>

            <div className="toggle-btn" onClick={toggleMenu}>
                {
                    menu ? <MdClose></MdClose> : <BiMenuAltRight></BiMenuAltRight>
                }

            </div>
            <AnimatePresence>
                {
                    menu && (
                        <motion.div className="flex-menu"
                            variants={item}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "100vh", opacity: 1 }}
                            transition={{ duration: .5 }}
                            exit="exit"
                        >
                            <div className="menu-container">
                                <motion.a
                                    initial={{ y: 80, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: .8 }}
                                    exit={{
                                        opacity: 0,
                                        y: 90,
                                        transition: {
                                            ease: "easeInOut",
                                            delay: 1
                                        }
                                    }}
                                    href="#services">Services</motion.a>
                                <motion.a
                                    initial={{ y: 80, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: .7 }}
                                    exit={{
                                        opacity: 0,
                                        y: 90,
                                        transition: {
                                            ease: "easeInOut",
                                            delay: 0.8
                                        }
                                    }}
                                    href="#projects">Projects</motion.a>
                                <motion.a
                                    initial={{ y: 80, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: .6 }}
                                    exit={{
                                        opacity: 0,
                                        y: 90,
                                        transition: {
                                            ease: "easeInOut",
                                            delay: 0.6
                                        }
                                    }}
                                    href="#about">About</motion.a>

                                <motion.a
                                    initial={{ y: 80, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: .5 }}
                                    exit={{
                                        opacity: 0,
                                        y: 90,
                                        transition: {
                                            ease: "easeInOut",
                                            delay: 0.4
                                        }
                                    }}
                                    href="#contact_us" className='flex-menu-btn'> Contact Us</motion.a>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
};

export default Navbar;