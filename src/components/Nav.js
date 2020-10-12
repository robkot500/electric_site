import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
import { Element } from "react-scroll";


function Nav() {

    const [hamburger, setHamburger] = useState(false)
    const handleClick = () => {
        setHamburger(!hamburger)
    }
    const navVariants = {
        hidden: {

        },
        visible: {

        }
    }
    return (
        <>

            <div className={hamburger ? ('nav nav-background') : ('nav')}>
                <motion.div className='logo' initial={{ opacity: 0, height: 10, x: -300 }} animate={{ x: 0, height: 55, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} >
                </motion.div>
                <div className={hamburger ? ('menu-container click') : ('menu-container')}>
                    <div onClick={handleClick} className='ham'>
                        <div className="ham1"></div>
                        <div className="ham2"></div>
                        <div className="ham3"></div>
                    </div>
                    <ul className='menu-wrapper'>
                        <li><Link onClick={handleClick} smooth={true} to="/">STRONA GŁÓWNA</Link></li>
                        <li><Link onClick={handleClick} smooth={true} to="main">O FIRMIE</Link></li>
                        <li><Link onClick={handleClick} smooth={true} to="offer">OFERTA</Link></li>
                        <li><Link onClick={handleClick} smooth={true} to="contact">KONTAKT</Link></li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Nav
