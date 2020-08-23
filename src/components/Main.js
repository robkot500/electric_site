import React from 'react';
// import { useState, useEffect } from 'react';
// import UseAnimations from 'react-useanimations';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import { Element } from "react-scroll";


function Main() {

    const [ref, inView] = useInView({
        rootMargin: '-150px 0px',
    })
    const controls = useAnimation();

    controls.start({
        y: -80, opacity: 1
    })
    return (
        <Element name='main' className='main'>

            {/* <motion.div className='main-slogan' animate={{ y: -120, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} >Profesjonalne usługi elektryczne w Rybniku i okolicach. Zaufaj wiedzy i doświadczeniu.</motion.div> */}
            <motion.div className='main-slogan' animate={controls} transition={{ ease: "easeOut", duration: 1 }} >Profesjonalne usługi elektryczne w Rybniku i okolicach. Zaufaj wiedzy i doświadczeniu.</motion.div>

            <motion.div className='main-item-wrapper' ref={ref} animate={inView ? ({ y: -120, opacity: 1 }) : ({})} transition={{ ease: "easeOut", duration: 0.5 }}>
                <motion.div className="main-item first-two" ref={ref} animate={inView ? ({ y: 100, opacity: 1, }) : ({})} initial={{ y: 200 }} transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
                    <div class="icon-wrapper"><i class="fas fa-user-cog"></i></div>
                    <div class="main-item-slogan"> Wiedza i doświadczenie</div>
                    <div className='main-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officia voluptatem culpa ex provident, molestias odio esse labore quibusdam maiores minima voluptates accusantium suscipit accusamus optio et dolorem, veniam ratione magni est facere? Quas pariatur esse, nihil veritatis laudantium sunt.</div>
                </motion.div>
                <motion.div className="main-item first-two" ref={ref} animate={inView ? ({ y: 100, opacity: 1, }) : ({})} initial={{ y: 200 }} transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
                    <div class="icon-wrapper"><i class="far fa-check-square"></i></div>
                    <div class="main-item-slogan">Gwarancja jakości</div>
                    <div className='main-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officia voluptatem culpa ex provident, molestias odio esse labore quibusdam maiores minima voluptates accusantium suscipit accusamus optio et dolorem, veniam ratione magni est facere? Quas pariatur esse, nihil veritatis laudantium sunt.</div>

                </motion.div>
                <motion.div className="main-item" ref={ref} animate={inView ? ({ y: 100, opacity: 1, }) : ({})} initial={{ y: 200 }} transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
                    <div class="icon-wrapper"><i class="fas fa-wallet"></i></div>
                    <div class="main-item-slogan"> Pewna cena</div>
                    <div className='main-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officia voluptatem culpa ex provident, molestias odio esse labore quibusdam maiores minima voluptates accusantium suscipit accusamus optio et dolorem, veniam ratione magni est facere? Quas pariatur esse, nihil veritatis laudantium sunt.</div>

                </motion.div>
                <motion.div className="main-item" ref={ref} animate={inView ? ({ y: 100, opacity: 1, }) : ({})} initial={{ y: 200 }} transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
                    <div class="icon-wrapper"><i class="fas fa-tasks"></i></div>
                    <div class="main-item-slogan">Proste zamówienie</div>
                    <div className='main-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officia voluptatem culpa ex provident, molestias odio esse labore quibusdam maiores minima voluptates accusantium suscipit accusamus optio et dolorem, veniam ratione magni est facere? Quas pariatur esse, nihil veritatis laudantium sunt.</div>
                </motion.div>
            </motion.div>
        </Element>
    )
}

export default Main
