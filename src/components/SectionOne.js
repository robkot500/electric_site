import React from 'react'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function SectionOne() {
    const [ref1, inView1] = useInView({
        rootMargin: '450px 0px',
    })
    const [ref2, inView2] = useInView({
        rootMargin: '450px 0px',
    })
    const [ref3, inView3] = useInView({
        rootMargin: '450px 0px',
    })
    const offer = [
        {
            picture: '1',
            name: 'Instalacje elektryczne',
            text: 'Instalacje Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minima est aliquam fugiat, sed aperiam nulla doloremque alias eligendi amet eum maxime temporibus, odio mollitia iste hic praesentium laborum architecto enim illo! At esse, temporibus harum voluptatum sit non! Neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae, earum, illum doloremque ducimus quidem dolore debitis saepe, excepturi odio voluptatibus! Commodi nostrum delectus accusamus esse aut minima, sunt neque molestias excepturi rerum perspiciatis nihil sapiente perferendis quaerat laudantium velit? ',
            ref: ref1,
            inView: inView1,
            points: () => {
                return (
                    <>
                        <div className="offer-points-slogan">Instalacja odbiorcza może składać się z następujących obwodów</div>
                        <div><i className="fas fa-long-arrow-alt-right"></i>oświetlenia ogólnego,</div>
                        <div><i className="fas fa-long-arrow-alt-right"></i>gniazd wtyczkowych</div>
                        <div><i className="fas fa-long-arrow-alt-right"></i>kuchni elektrycznej,</div>
                        <div><i className="fas fa-long-arrow-alt-right"></i>elektrycznego podgrzewacza wody,</div>
                    </>
                )
            }
        },
        {
            picture: '2',
            name: 'Fotowoltaika',
            text: 'Instalacje Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minima est aliquam fugiat, sed aperiam nulla doloremque alias eligendi amet eum maxime temporibus, odio mollitia iste hic praesentium laborum architecto enim illo! At esse, temporibus harum voluptatum sit non! Neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae, earum, illum doloremque ducimus quidem dolore debitis saepe, excepturi odio voluptatibus! Commodi nostrum delectus accusamus esse aut minima, sunt neque molestias excepturi rerum perspiciatis nihil sapiente perferendis quaerat laudantium velit? ',
            ref: ref2,
            inView: inView2,
            points: () => {
                return (
                    <>
                        <div className="offer-points-slogan">Instalacja odbiorcza może składać się z następujących obwodów</div>
                        <div><i className="fas fa-long-arrow-alt-right"></i>oświetlenia ogólnego,</div>
                        <div><i className="fas fa-long-arrow-alt-right"></i>gniazd wtyczkowych</div>
                        <div><i className="fas fa-long-arrow-alt-right"></i>kuchni elektrycznej,</div>
                        <div><i className="fas fa-long-arrow-alt-right"></i>elektrycznego podgrzewacza wody,</div>
                    </>
                )
            }
        },
        {
            picture: '3',
            name: 'Awarie elektryczne',
            text: 'Instalacje Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minima est aliquam fugiat, sed aperiam nulla doloremque alias eligendi amet eum maxime temporibus, odio mollitia iste hic praesentium laborum architecto enim illo! At esse, temporibus harum voluptatum sit non! Neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae, earum, illum doloremque ducimus quidem dolore debitis saepe, excepturi odio voluptatibus! Commodi nostrum delectus accusamus esse aut minima, sunt neque molestias excepturi rerum perspiciatis nihil sapiente perferendis quaerat laudantium velit? ',
            ref: ref3,
            inView: inView3,
            points: () => {
                return (
                    <>
                        <div className="offer-points-slogan">Instalacja odbiorcza może składać się z następujących obwodów</div>
                        <div><i className="fas fa-long-arrow-alt-right"></i>oświetlenia ogólnego,</div>
                        <div><i className="fas fa-long-arrow-alt-right"></i>gniazd wtyczkowych</div>
                        <div><i className="fas fa-long-arrow-alt-right"></i>kuchni elektrycznej,</div>
                        <div><i className="fas fa-long-arrow-alt-right"></i>elektrycznego podgrzewacza wody,</div>
                    </>
                )
            }
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
        }
    }

    const displayOffer = offer.map((each) => {
        return (
            <div class="offer-wrapper">
                <motion.div class={`offer-wrapper-picture${each.picture}`} ref={each.ref} initial={{ opacity: 0, x: -200 }} animate={each.inView ? ({ x: 0, opacity: 1 }) : ({})} transition={{ delay: 1, ease: "easeOut", duration: 0.5 }}></motion.div>
                <div class="offer-wrapper-right">
                    <motion.div class="offer-wrapper-name" variants={mainVariants1} initial='hidden' ref={each.ref} animate={each.inView ? ('visible') : ({})} transition={{ ease: "easeOut", duration: 1, delay: 0 }}>{each.name}</motion.div>
                    <motion.div class="offer-text" variants={mainVariants1} initial='hidden' ref={each.ref} animate={each.inView ? ('visible') : ({})} transition={{ delay: 0.2, ease: "easeOut", duration: 0.5 }}>{each.text}</motion.div>
                    <motion.div class="offer-points" variants={mainVariants1} initial='hidden' ref={each.ref} animate={each.inView ? ('visible') : ({})} transition={{ delay: 0.4, ease: "easeOut", duration: 0.5 }}>
                        {each.points()}
                    </motion.div>
                    <motion.div class="offer-line" variants={mainVariants1} initial='hidden' ref={each.ref} animate={each.inView ? ('visible') : ({})} transition={{ delay: 0.6, ease: "easeOut", duration: 0.5 }}></motion.div>
                </div>
            </div>
        )
    }
    )
    return (
        <div className='section-one-container'>
            <div className="parallax-one"></div>
            <div className="offer-container">
                <div class="offer-title">Oferta</div>
                {displayOffer}
            </div>
        </div>
    )
}

export default SectionOne
