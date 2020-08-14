import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import { motion } from 'framer-motion';

const Carousel = () => {
    let reactSwipeEl;
    const it = ['one', 'two', 'three', 'four']
    const items = it.map(item => {
        console.log(item)
        return (
            <div className={`carousel-item carousel-item-${item}`}>
                <div onClick={() => reactSwipeEl.prev()} className='arrow-wrapper'><i class="fas fa-angle-left"></i></div>
                < div className='item-wrapper' >
                    <motion.div animate={{ y: 200, }} transition={{ ease: "easeOut", duration: 0.4 }} className='item item-up'>Instalacje elektryczne</motion.div>
                    <motion.div animate={{ y: -210 }} transition={{ ease: "easeOut", duration: 0.4 }} className='item item-down'>Układamy nowe instalacje na podstawie projektu wykonawczego lub na podstawie własnej wiedzy i doświadczenia.</motion.div>
                </div >
                <div onClick={() => reactSwipeEl.next()} className='arrow-wrapper'><i class="fas fa-angle-right"></i></div>
            </div >
        )


    })

    return (
        <div className='carousel-container'>
            <ReactSwipe
                className="carousel"
                swipeOptions={{ disableScroll: true, continuous: true, auto: 3000, }}
                ref={el => (reactSwipeEl = el)}
            >
                {items}
            </ReactSwipe>
            <div className='abc'>Profesjonalne usługi elektryczne w Rybniku i okolicach. Zaufaj wiedzy i doświadczeniu.</div>

        </div>
    );
};
export default Carousel
