import React, {useEffect, useState} from 'react'
function UseEffecthooks(){
    const [type, setType] = useState("")
    console.log("window is rendered")
    useEffect(()=>{
        console.log("component is rendered")
    },[type])

    return <div >
    <h2>Welcome </h2>
    <div className='edit' >
        <button onClick={() => setType("12 Polls")}>POLLS</button>
        <button onClick={() => setType("250 likes")}>LIKES</button>
        <button onClick={() => setType("120 comments")}>COMMENTS</button>
        <br />
        <h1>{type}</h1>

    </div>
    
    </div>
}
export default UseEffecthooks