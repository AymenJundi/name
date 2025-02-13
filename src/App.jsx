import React from 'react';
import { BrowserRouter} from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import { About, Contact, Experience,  Footer, Hero, Navbar,  } from './components';



const App = () => {
  return (
    <BrowserRouter>
    <div className='bg-white relative z-0'>
    <div className=" bg-cover bg-center bg-no-repeat">
    <Navbar />
    <Hero />
    </div>
 

 <About />
 <Experience />

 <div className='relative z-0'>
 <Contact />
 <Footer />
 </div>
 
 </div>
  </BrowserRouter>
  );
};

export default App;