import React from 'react';
// import { useState, useEffect } from 'react';
// import UseAnimations from 'react-useanimations';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import { Element } from "react-scroll";


function Main() {
    const electrician = [
        {
            title: 'Wiedza i doświadczenie',
            text: 'Dzięki doświadczeniu i ciągłemu podnoszeniu kwalifikacji instalacje są układane fachowo i w oparciu o najnowsze trendy, a usterki są usuwane szybko i dokładnie.',
            icon: 'fas fa-user-cog'
        },
        {
            title: 'Gwarancja jakości',
            text: ' Wszelkie prace wykonujemy jedynie za pomocą profesjonalnego sprzętu i najwyższej jakości materiałów renomowanych firm, co sprawia, że nasza praca jest najwyższej jakości.',
            icon: 'far fa-check-square'
        },
        {
            title: 'Dobra cena',
            text: 'Każde zlecenie traktujemy indywidualnie. Cena jest ustalona w zależności od wykorzystanej technologii i wykorzystanych materiałów przed wykonaniem usługi. ',
            icon: 'fas fa-wallet'
        },
        {
            title: 'Proste zamówienie',
            text: 'Dzięki doświadczeniu i ciągłemu podnoszeniu kwalifikacji instalacje są układane fachowo i w oparciu o najnowsze trendy, a usterki są usuwane szybko i dokładnie.',
            icon: 'fas fa-tasks'
        }
    ]
    const [ref, inView] = useInView({
        rootMargin: '-150px 0px',
    })
    const [ref2, inView2] = useInView({
        rootMargin: '-100px 0px',
    })
    const [ref3, inView3] = useInView({
        rootMargin: '-50px 0px',
    })
    const [ref4, inView4] = useInView({
        rootMargin: '-50px 0px',
    })
    const [ref5, inView5] = useInView({
        rootMargin: '-50px 0px',
    })
    const controls = useAnimation();

    controls.start({
        y: -80, opacity: 1
    })
    const items = electrician.map(each => {
        return (
            <motion.div className={each === electrician[0] | each === electrician[1] ? "main-item first-two" : "main-item"} ref={ref} animate={inView ? ({ y: 100, opacity: 1, }) : ({})} initial={{ y: 200 }} transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
                <div class="icon-wrapper"><i className={each.icon}></i></div>
                <div class="main-item-slogan">{each.title}</div>
                <div className='main-item-text'>{each.text}</div>
            </motion.div>
        )
    })

    return (
        <Element name='main' className='main'>
            <motion.div className='main-slogan' animate={controls} transition={{ ease: "easeOut", duration: 1 }} >Profesjonalne usługi elektryczne w Rybniku i okolicach. Zaufaj wiedzy i doświadczeniu.</motion.div>
            <motion.div className='main-item-wrapper' ref={ref} animate={inView ? ({ y: -160, opacity: 1 }) : ({})} transition={{ ease: "easeOut", duration: 0.5 }}>
                {items}
            </motion.div>
            {/* <motion.div className='main-about' ref={ref2} animate={inView2 ? ({ y: -160, opacity: 1 }) : ({})} transition={{ ease: "easeOut", duration: 0.5 }}>
            </motion.div> */}
            <motion.div class="main-about-title" ref={ref3} animate={inView3 ? ({ y: -100, opacity: 1 }) : ({})} transition={{ delay: 0.1, ease: "easeOut", duration: 0.5 }}>O firmie</motion.div>

            <motion.div class="about-slogan" ref={ref4} animate={inView4 ? ({ y: -100, opacity: 1 }) : ({})} transition={{ delay: 0.1, ease: "easeOut", duration: 0.5 }}>Zadowolenie klienta jest dla nas najważniejsze</motion.div>
            <motion.div class="about-text" ref={ref5} animate={inView5 ? ({ y: -100, opacity: 1 }) : ({})} transition={{ delay: 0.1, ease: "easeOut", duration: 0.5 }}>Jesteśmy firmą.... lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nostrum vel rerum delectus facilis aliquid atque, obcaecati architecto eligendi porro at neque incidunt repellat! Delectus possimus facere autem, nesciunt ratione omnis exercitationem obcaecati pariatur. Modi, deserunt optio mollitia odio reprehenderit autem aperiam iure illum in ab? Assumenda omnis aspernatur totam?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum beatae amet at illo quibusdam tempora ab iusto sed, quos, dignissimos hic deserunt. Blanditiis ipsum quaerat saepe, nam similique cupiditate autem nobis sit quod tenetur cum pariatur. Possimus ad adipisci sunt ex optio quidem, sed quae modi consectetur architecto natus quas?
            </motion.div>
        </Element>
    )
}

export default Main
