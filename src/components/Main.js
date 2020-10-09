import React from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";


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
    const mainVariants1 = {
        hidden: {
            y: 200,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 1, delay: 0 },
        }
    }
    const mainVariants2 = {
        hidden: {
            y: 200,
            opacity: 0.5,
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }

    const [ref, inView] = useInView({
        rootMargin: '250px  0px 250px 0px',
    })
    const [ref2, inView2] = useInView({
        // threshold: 0,
        rootMargin: '50px 0px 0px 0px',
    })
    const [ref3, inView3] = useInView({
        rootMargin: '0px 0px -20% 0px',
    })
    const [ref4, inView4] = useInView({
        rootMargin: '0px 0px opx 0px',
    })




    const items = electrician.map(each => {
        return (
            <motion.div className={each === electrician[0] | each === electrician[1] ? "main-item first-two" : "main-item"} variants={mainVariants1} animate={inView3 ? ('visible') : ({})} initial='hidden' >
                <div class="icon-wrapper"><i className={each.icon}></i></div>
                <div class="main-item-slogan">{each.title}</div>
                <div className='main-item-text'>{each.text}</div>
            </motion.div>
        )
    })

    return (
        <Element name='main' className='main'>
            <motion.div className='main-slogan' variants={mainVariants1} initial='hidden' animate='visible'  >Profesjonalne usługi elektryczne w Rybniku i okolicach. Zaufaj wiedzy i doświadczeniu.
            </motion.div>
            <div className='main-item-wrapper' ref={ref3}>
                {items}
            </div>
            <motion.div className='main-about' variants={mainVariants2} ref={ref2} initial='hidden' animate={inView2 ? ('visible') : ({})} transition={{ delay: 0, ease: "easeOut", duration: 0.5 }} >
                O firmie
            </motion.div>
            <div className="main-about-wrapper">
                <motion.div class="main-about-left" variants={mainVariants2} ref={ref2} initial='hidden' animate={inView2 ? ('visible') : ({})} transition={{ delay: 0.5, ease: "easeOut", duration: 0.5 }}>
                    <motion.div class="about-slogan" variants={mainVariants2} ref={ref2} initial='hidden' animate={inView2 ? ('visible') : ({})} transition={{ delay: 0.7, ease: "easeOut", duration: 0.5 }}>Zadowolenie klienta jest dla nas najważniejsze
                    </motion.div>
                    <motion.div class="about-text" variants={mainVariants2} ref={ref2} initial='hidden' animate={inView2 ? ('visible') : ({})} transition={{ delay: 0.9, ease: "easeOut", duration: 0.5 }}>Jesteśmy firmą.... lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nostrum vel rerum delectus facilis aliquid atque, obcaecati architecto eligendi porro at neque incidunt repellat! Delectus possimus facere autem, nesciunt ratione omnis exercitationem obcaecati pariatur. Modi, deserunt optio mollitia odio reprehenderit autem aperiam iure illum in ab? Assumenda omnis aspernatur totam?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum beatae amet at illo quibusdam tempora ab iusto sed, quos, dignissimos hic deserunt. Blanditiis ipsum quaerat saepe, nam similique cupiditate autem nobis sit quod tenetur cum pariatur. Possimus ad.
                    </motion.div>
                    <motion.div className='main-line' variants={mainVariants2} ref={ref2} initial='hidden' animate={inView2 ? ('visible') : ({})} transition={{ delay: 1.1, ease: "easeOut", duration: 0.5 }}>
                    </motion.div>
                </motion.div>
                <motion.div class="main-about-right" ref={ref} initial={{ opacity: 0, x: 200 }} animate={inView ? ({ x: 0, opacity: 1 }) : ({})} transition={{ delay: 1.5, ease: "easeOut", duration: 0.5 }}>
                </motion.div>
            </div>
        </Element>
    )
}

export default Main
