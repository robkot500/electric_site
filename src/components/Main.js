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
            text: 'Dzięki doświadczeniu i ciągłemu podnoszeniu kwalifikacji instalacje są układane fachowo i w oparciu o najnowsze trendy, a usterki są usuwane szybko i dokładnie Wyjątkowy nacisk kładziemy na bezpieczeństwo wykonywanych przez nas prac instalacyjnych i napraw. Nasze usługi elektryczne wzbogacamy  o bezpłatne doradztwo techniczne. Posiadamy wykształcenie zawodowe w kierunku Elektryk oraz uprawnienia SEP. Klientom daje to pewność, że zgłoszone przez nich zlecenie zostanie  wykonane przez profesjonalistów, posiadających odpowiednie certyfikaty, co w przypadku instalacji elektrycznych jest szczególnie ważne.',
            icon: 'fas fa-user-cog'
        },
        {
            title: 'Gwarancja jakości',
            text: ' Wszelkie prace wykonujemy jedynie za pomocą profesjonalnego sprzętu i najwyższej jakości materiałów renomowanych firm, co sprawia, że nasza praca jest najwyższej jakości. Jeśli chcesz uzyskać gwarancję bezpieczeństwa swojej instalacji elektrycznej, skorzystaj z naszych usług. Wybierając nasze usługi, zyskują Państwo nie tylko najwyższą jakość ale też kompleksowe wsparcie - doradzamy jakie rozwiążania nalepiej wybrać w danej sytuacji. Za wykonane prace bierzemy pełną odpowiedzialność. Udzielamy trzyletniej gwarancji na nasze usługi. Zadowolenie klienta jest dla nas najważniejsze.',
            icon: 'far fa-check-square'
        },
        {
            title: 'Dobra cena',
            text: 'Każde zlecenie traktujemy indywidualnie. Cena jest ustalona w zależności od wykorzystanej technologii i wykorzystanych materiałów przed wykonaniem usługi. Jeżeli klient chce wykorzystać swoje materiały jest taka możliwość Oferujemy darmowe doradztwo. Gwarantujemy korzystne ceny przy wykorzystaniu materiałów najwyższej  jakości i fachowym wykonaniu naszej usługi.Płacisz za wykonaną usługę, a nie za godzinę pracy!',
            icon: 'fas fa-wallet'
        },
        {
            title: 'Proste zamówienie',
            text: 'Dzięki doświadczeniu i ciągłemu podnoszeniu kwalifikacji instalacje są układane fachowo i w oparciu o najnowsze trendy, a usterki są usuwane szybko i dokładnie Wyjątkowy nacisk kładziemy na bezpieczeństwo wykonywanych przez nas prac instalacyjnych i napraw. Nasze usługi elektryczne wzbogacamy  o bezpłatne doradztwo techniczne. Posiadamy wykształcenie zawodowe w kierunku Elektryk oraz uprawnienia SEP. Klientom daje to pewność, że zgłoszone przez nich zlecenie zostanie  wykonane przez profesjonalistów, posiadających odpowiednie certyfikaty, co w przypadku instalacji elektrycznych jest szczególnie ważne.',
            icon: 'fas fa-tasks'
        }
    ]
    const [ref, inView] = useInView({
        rootMargin: '-150px 0px',
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
        </Element>
    )
}

export default Main
