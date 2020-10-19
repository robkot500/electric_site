import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import { motion } from 'framer-motion';
import { Link, Element } from "react-scroll";


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
                    <motion.div animate={{ y: 120, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className='item item-up'>{item.textUp}
                    </motion.div>
                    <motion.div animate={{ y: -200, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} className='item item-down'>{item.textDown}
                    </motion.div>
                    <motion.div animate={{ y: 105, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} class="item-buttons">
                        <Link class="button-left" smooth={true} to="offer">Oferta</Link>
                        <Link class="button-right" smooth={true} to="contact">Kontakt</Link>
                    </motion.div>
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
        </div >
    );
};
export default Carousel
