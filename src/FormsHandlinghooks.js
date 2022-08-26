import React, { useState} from 'react'
function FormsHandlinghooks(){
    const[name,setName] = useState("")
    const[country,setCountry] = useState("")
    const handleSubmit = () =>{
        alert(` my name is ${name} and \n i live in  ${country}`)

    }


    return<div className='reg'>
        <h2>Enter your name</h2>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
    <br />
    <h2>Enter your country</h2>
    <br />
    <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)}></input>
    <br />
    <br />

    <button onClick={handleSubmit}>submit</button>
   
    </div>
}
export default FormsHandlinghooks