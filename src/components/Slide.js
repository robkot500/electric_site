import React from 'react';
import { motion } from 'framer-motion';

function Slide(props) {
    console.log(props)
    let reactSwipeEl;
    const item = props.item
    console.log(item)
    return (
        <div className={`carousel-item carousel-item-${item}`}>
            <div onClick={() => reactSwipeEl.prev()} className='arrow-wrapper'><i class="fas fa-angle-left"></i></div>
            < div className='item-wrapper' >
                <motion.div animate={{ y: 200, }} className='item item-up'>Instalacje elektryczne</motion.div>
                <motion.div animate={{ y: -210 }} className='item item-down'>Układamy nowe instalacje na podstawie projektu wykonawczego lub na podstawie własnej wiedzy i doświadczenia.</motion.div>
            </div >
            <div onClick={() => reactSwipeEl.next()} className='arrow-wrapper'><i class="fas fa-angle-right"></i></div>
        </div >
    )
}

export default Slide
