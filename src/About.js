import React from 'react'
import imag3 from './imag3.jpg'
const About =()=>{
    return <div>
         <h1 className='bg-dark text-white p-3'>About </h1>
     <div className='row mt-5'>  
       
       <div className='col-md-6'>

            <p className='mt-3 mx-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime soluta, atque eveniet error labore modi incidunt? Sequi dignissimos fugiat debitis vitae ipsam suscipit velit, commodi neque aspernatur! Temporibus nobis enim, optio aliquid voluptates saepe blanditiis fugit facilis voluptatem? Ea voluptas ratione dignissimos nostrum, porro facere, iusto earum fuga blanditiis inventore impedit ipsum quibusdam non vero nam, tempora id itaque magni ullam soluta architecto velit vitae exercitationem repellat. Voluptatem, aut illo hic beatae quisquam magni maiores omnis, dicta odit perferendis cum voluptas aspernatur eaque, voluptate </p>
        
       </div>
       
      
                <div className='col-md-6'>
                    <img src={imag3} width="500" height="300" />
                </div>
       </div>

    </div>

};
export default About;