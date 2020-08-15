import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import { motion } from 'framer-motion';
import Slide from './Slide'

const Carousel = () => {
    let reactSwipeEl;
    const slides = [
        {
            number: 'one',
            textUp: 'Instalacje elektryczne',
            textDown: 'Układamy nowe instalacje na podstawie projektu wykonawczego lub na podstawie własnej wiedzy i doświadczenia.'
        },
        {
            number: 'two',
            textUp: 'Fotowoltaika',
            textDown: 'Układamy nowe instalacje na podstawie projektu wykonawczego lub na podstawie własnej wiedzy i doświadczenia.'
        },
        {
            number: 'three',
            textUp: 'Awarie elektryczne',
            textDown: 'Układamy nowe instalacje na podstawie projektu wykonawczego lub na podstawie własnej wiedzy i doświadczenia.'
        },
        {
            number: 'four',
            textUp: 'Serwis i naprawa',
            textDown: 'Instalacje elektryczne są bardzo trwałe i bezpieczne, ale ich użytkowanie wymaga ostrożności oraz okresowej konserwacji.'
        },
        {
            number: 'five',
            textUp: 'Pomiary elektryczne',
            textDown: 'Pomiary i badania okresowe powinny być wykonywane nie rzadziej niż co 5 lat lub co rok przy szkodliwym wpływie czynników zewnętrznych.'
        }
    ]

    const items = slides.map(item => {
        return (
            <div className={`carousel-item carousel-item-${item.number}`}>
                <div onClick={() => reactSwipeEl.prev()} className='arrow-wrapper'><i class="fas fa-angle-left"></i></div>
                < div className='item-wrapper' >
                    <motion.div animate={{ y: 200, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className='item item-up'>{item.textUp}</motion.div>
                    <motion.div animate={{ y: -210, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className='item item-down'>{item.textDown}</motion.div>
                    {/* <div class="item-buttons"></div> */}
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
            <motion.div animate={{ y: -150, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className='abc'>Profesjonalne usługi elektryczne w Rybniku i okolicach. Zaufaj wiedzy i doświadczeniu.</motion.div>

        </div>
    );
};
export default Carousel
