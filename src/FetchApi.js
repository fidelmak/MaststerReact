import React, { useState } from 'react'
import axios from 'axios'


const FetchApi =()=>{

//  async function fetchApi (){
//     var  response = await fetch("https://jsonplaceholder.typicode.com/users")
//     console.log(await response.json())

    
    
// }

const[user , setUser] = useState([

])


const handleAxios = ()=>{
    axios.get("/api/todos/")

    .then(res=> {
        console.log(res.data)       
        setUser(res.data)
    })
    .catch(err=>console.log(err))
}


const loopData= user.map(data=>{
    return <div>
        <h5 style={{backgroundColor:"black", color:"white"}}>Username:{data.name}</h5>
        <h5 style={{backgroundColor:"#36ba9e", color:"white"}}>Email:{data.email}</h5>
        <h5>Portfolio website: {data.website}</h5>
        <hr />
    </div>
})
    return <>
    <div>
        <h1>Hello fetch</h1>
        <button  type="button" style={{backgroundColor:"black", color:"white", borderRadius:"20px"}} onClick={handleAxios}>Get data using Axios</button> 
        <br />

       <br />
       <br />
        {loopData}

    </div>
    </>
}
export default FetchApi