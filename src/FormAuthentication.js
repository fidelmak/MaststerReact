import React, {useState} from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import imag from './imag.jpg'
import swal from 'sweetalert'


const FormAuthentication =()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(email=="area@gmail.com" && password ==1234 )
        swal("successfully registered")
        else
        swal("not successful")
    }
    
   return<>
<div >
 <br />   
<h2>Form Authentication </h2>
<br />
   <div className='row' id='row'>

        <div className='col-md-6'><img  src={imag}  className="float-right" width="400" /> </div>

            <div className='col-md-4'>
            <form id='Auth' onSubmit={handleSubmit}>
            <div className="form-group">
            <label className='label'>Email </label>
            <input type="text" value={email} className="form-control" placeholder="email@example.com" id="in" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="form-group">
            <label className='label' >Password</label>
            <input type="text" value={password} className="form-control"  placeholder="Password"  id="in" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div>
            
            </div>
            <button id='btx' type="submit">Sign in</button>
            <p className='tst'>Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or
            Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or </p>
            </form>
             </div>
    </div>
</div>
</> 
    
}
export default FormAuthentication