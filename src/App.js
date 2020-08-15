import React from 'react';
import Carousel from './components/Carousel';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div className='container'>
      <Nav />
      <Carousel />
      <Main />
    </div>

  );
}

export default App;
