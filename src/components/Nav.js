import React from 'react';
import { motion } from 'framer-motion';

function Nav() {
    return (
        <div className='nav-container'>
            <motion.div animate={{ height: 40, x: 250, }} className='logo'>
            </motion.div>
            <nav>
                <ul>
                    <li>STRONA GŁÓWNA</li>
                    <li>O FIRMIE</li>
                    <li>OFERTA</li>
                    <li>REALIZACJE</li>
                    <li>KONTAKT</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
