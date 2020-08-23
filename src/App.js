import React from 'react';
import Carousel from './components/Carousel';
import Nav from './components/Nav';
import Main from './components/Main';
import Scroll from './components/Scroll'



function App() {
  return (
    <div className='container'>
      <Scroll />
      <Nav />
      <Carousel />
      <Main />
    </div>

  );
}

export default App;
