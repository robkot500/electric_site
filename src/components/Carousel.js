import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

const Carousel = () => {
    let reactSwipeEl;


    return (
        <div className='carousel-container'>
            <ReactSwipe
                className="carousel"
                swipeOptions={{ disableScroll: true, continuous: true, auto: 3000, }}
                ref={el => (reactSwipeEl = el)}
            >
                <div className='carousel-item carousel-item-one'>
                    <div onClick={() => reactSwipeEl.prev()} className='arrow-wrapper'><i class="fas fa-angle-left"></i></div>
                    <div className='item-wrapper'>
                        <div className='item item-up'>Instalacje elektryczne</div>
                        <div className='item item-down'>Układamy nowe instalacje na podstawie projektu wykonawczego lub na podstawie własnej wiedzy i doświadczenia.</div>
                    </div>
                    <div onClick={() => reactSwipeEl.next()} className='arrow-wrapper'><i class="fas fa-angle-right"></i></div>
                </div>
                <div className='carousel-item carousel-item-two'>
                    <div onClick={() => reactSwipeEl.prev()} className='arrow-wrapper'><i class="fas fa-angle-left"></i></div>
                    <div className='item-wrapper'>
                        <div className='item item-up'>Fotowoltaika</div>
                        <div className='item item-down'>Układamy nowe instalacje na podstawie projektu wykonawczego lub na podstawie własnej wiedzy i doświadczenia.</div>
                    </div>
                    <div onClick={() => reactSwipeEl.next()} className='arrow-wrapper'><i class="fas fa-angle-right"></i></div>
                </div>
                <div className='carousel-item carousel-item-three'>
                    <div onClick={() => reactSwipeEl.prev()} className='arrow-wrapper'><i class="fas fa-angle-left"></i></div>
                    <div className='item-wrapper'>
                        <div className='item item-up'>Awarie elektryczne</div>
                        <div className='item item-down'>Układamy nowe instalacje na podstawie projektu wykonawczego lub na podstawie własnej wiedzy i doświadczenia.</div>
                    </div>
                    <div onClick={() => reactSwipeEl.next()} className='arrow-wrapper'><i class="fas fa-angle-right"></i></div>
                </div>
                <div className='carousel-item carousel-item-four'>
                    <div onClick={() => reactSwipeEl.prev()} className='arrow-wrapper'><i class="fas fa-angle-left"></i></div>
                    <div className='item-wrapper'>
                        <div className='item item-up'>Serwis i naprawa</div>
                        <div className='item item-down'>Układamy nowe instalacje na podstawie projektu wykonawczego lub na podstawie własnej wiedzy i doświadczenia.</div>
                    </div>
                    <div onClick={() => reactSwipeEl.next()} className='arrow-wrapper'><i class="fas fa-angle-right"></i></div>
                </div>
            </ReactSwipe>
            <div className='abc'>Profesjonalne usługi elektryczne w Rybniku i okolicach. Zaufaj wiedzy i doświadczeniu.</div>

        </div>
    );
};
export default Carousel
