import React from 'react';
import Hero from './Hero';
import  Short from './Short';   
import Newsletter from './Newsletter';
import Features from './Features';
import HeroVideoDialog from './magicui/Video'; // Adjust the path accordingly


const App = () => {
  return (
    <div>
      {/* <Home /> */}

      <Hero/>
      {/* <Short/> */}
 
      <Features/>
      <Newsletter/>

    </div>
  );
};

export default App;
