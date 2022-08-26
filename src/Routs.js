
import React from 'react';
import { BrowserRouter,  Routes, Route} from 'react-router-dom'


import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navpath from './Navpath';




function Routs() {
  

  

  return ( <div>
   
      <BrowserRouter>
   
   
      <Routes>
      <Route path="/" element={<Navpath />} />
      <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} /> 
        </Routes>
        </BrowserRouter>
          
            
            
          
          
      
     
     
      
    </div>
  );
}

export default Routs;



