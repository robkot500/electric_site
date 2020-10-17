import React from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";

function Contact() {
    return (
        <Element className='contact-container' name='contact'>
            <div className='contact-title'>Kontakt</div>
            <div className='contact-box'>
                {/* <div className='contact-line'></div> */}
                <div className='contact-wrapper'>
                    <div className='contact-slogan'>Skontaktuj się z nami</div>
                    <div className='contact-line'></div>
                    <div className='contact-where'>Działamy na terenie Rybnika i okolic Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae quidem accusamus eum eius veniam voluptate quasi in suscipit obcaecati?</div>
                    <div className='contact-tel-email'>
                        <div className='contact-tel'><i class="fas fa-phone-alt"></i> +48 692 290 333</div>
                        <div className='contact-email'><i class="fas fa-at"></i>tszoltysek69@gmail.com </div>
                    </div>
                </div>
                <div className='contact-picture'></div>
            </div>
        </Element >
    )
}

export default Contact
