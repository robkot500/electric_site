import React from 'react';
import Carousel from './components/Carousel';
import Nav from './components/Nav';
import Main from './components/Main';
import Scroll from './components/Scroll'
import SectionOne from './components/SectionOne';
import Contact from './components/Contact';



function App() {
  return (
    <div className='container'>
      <Scroll />
      <Nav />
      <Carousel />
      <Main />
      <SectionOne />
      <Contact />
    </div>

  );
}

export default App;
