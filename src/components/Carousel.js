import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

const Carousel = () => {
    let reactSwipeEl;

    return (
        <div className='carousel-container'>
            <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: true }}
                ref={el => (reactSwipeEl = el)}
            >
                <div className='carousel-item carousel-item-one'>PANE 1</div>
                <div className='carousel-item carousel-item-two'>PANE 2</div>
                <div className='carousel-item carousel-item-three'>PANE 3</div>
                <div className='carousel-item carousel-item-four'>PANE 4</div>
            </ReactSwipe>
            <div className='abc'></div>
            <button onClick={() => reactSwipeEl.next()}>Next</button>
            <button onClick={() => reactSwipeEl.prev()}>Previous</button>
        </div>
    );
};
export default Carousel
