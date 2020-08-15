import React from 'react';
import { motion } from 'framer-motion';

function Main() {
    return (
        <div className='main'>
            <motion.div className='main-slogan' animate={{ y: -120, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} >Profesjonalne usługi elektryczne w Rybniku i okolicach. Zaufaj wiedzy i doświadczeniu.</motion.div>
            <motion.div className='main-item-wrapper' animate={{ y: -120, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}>
                <div className="main-item">
                    <div class="icon-wrapper"><i class="fas fa-user-cog"></i></div>
                    <div class="main-item-slogan"> Wiedza i doświadczenie</div>
                </div>
                <div className="main-item">
                    <div class="icon-wrapper"><i class="far fa-check-square"></i></div>
                    <div class="main-item-slogan">Gwarancja jakości</div>
                </div>
                <div className="main-item">
                    <div class="icon-wrapper"><i class="fas fa-wallet"></i></div>
                    <div class="main-item-slogan"> Pewna cena</div>
                </div>
                <div className="main-item">
                    <div class="icon-wrapper"><i class="fas fa-tasks"></i></div>
                    <div class="main-item-slogan">Proste zamówienie</div>
                </div>
            </motion.div>
        </div>
    )
}

export default Main
