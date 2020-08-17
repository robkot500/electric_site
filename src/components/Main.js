import React from 'react';
// import { useState, useEffect } from 'react';
// import UseAnimations from 'react-useanimations';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Main() {

    const [ref, inView] = useInView({
        rootMargin: '-100px 0px',
    })
    const controls = useAnimation();

    controls.start({
        y: -120, opacity: 1
    })
    return (
        <div className='main'>
            {/* <motion.div className='main-slogan' animate={{ y: -120, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} >Profesjonalne usługi elektryczne w Rybniku i okolicach. Zaufaj wiedzy i doświadczeniu.</motion.div> */}
            <motion.div className='main-slogan' animate={controls} transition={{ ease: "easeOut", duration: 1 }} >Profesjonalne usługi elektryczne w Rybniku i okolicach. Zaufaj wiedzy i doświadczeniu.</motion.div>

            <motion.div className='main-item-wrapper' ref={ref} animate={inView ? (console.log('hhhhhhhh'), { y: -120, opacity: 1 }) : ({})} transition={{ ease: "easeOut", duration: 0.5 }}>
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
        </div >
    )
}

export default Main
