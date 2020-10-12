import React from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";

function Contact() {
    return (
        <Element className='contact-container' name='contact'>
            <div className='contact-title'>Kontakt</div>
            <div className='contact-slogan'>Skontaktuj się z nami</div>
            <div className='contact-line'></div>
            <div className='contact-where'>Działamy na terenie Rybnika i okolic</div>
            <div className='contact-wrapper'>
                <div className='contact-tel'><i class="fas fa-phone-alt"></i>692 290 333</div>
                <div className='contact-email'><i class="fas fa-at"></i>tszoltysek69@gmail.com </div>
            </div>
        </Element >
    )
}

export default Contact
