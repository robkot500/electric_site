import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

function Nav() {

    const [hamburger, setHamburger] = useState(false)
    const handleClick = () => {
        setHamburger(!hamburger)
    }
    return (

        <div className={hamburger ? ('nav nav-background') : ('nav')}>
            <motion.div animate={{ height: 55, x: 140, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className='logo'>
            </motion.div>
            <div className={hamburger ? ('menu-container click') : ('menu-container')}>
                <div onClick={handleClick} className='ham'>
                    <div className="ham1"></div>
                    <div className="ham2"></div>
                    <div className="ham3"></div>
                </div>
                <ul className='menu-wrapper'>
                    <li><Link onClick={handleClick} smooth={true} to="/">STRONA GŁÓWNA</Link></li>
                    <li><Link onClick={handleClick} smooth={true} to="portfolio">O FIRMIE</Link></li>
                    <li><Link onClick={handleClick} smooth={true} to="about">OFERTA</Link></li>
                    <li><Link onClick={handleClick} smooth={true} to="contact">REALIZACJE</Link></li>
                    <li><Link onClick={handleClick} smooth={true} to="contact">KONTAKT</Link></li>

                </ul>
            </div>
        </div >
    )
}

export default Nav
