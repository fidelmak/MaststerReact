import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,  Routes, Route} from 'react-router-dom'

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';

function Routproject (){
    return <div className=' ' >
        
         <BrowserRouter>
         <Nav />
         <Routes>
         
      <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} /> 


         </Routes>



         </BrowserRouter>
       
    </div>
}
export default Routproject