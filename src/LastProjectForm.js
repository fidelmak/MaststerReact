import React, {useContext, useState} from 'react'
import { LastProjectContextFile } from './LastProjectContextFile'
const LastProjectForm =()=>{
    const [name, setName] = useState("")
    const [comic,setComic] = useState("")
    const {addHero} = useContext(LastProjectContextFile)
    const handleSubmit=(e)=>{
        e.preventDefault()
           addHero(name, comic)
           setName("") 
           setComic(" ")
    }
    return <div className='d-flex justify-content-center p-3' style={{background:"teal"}}>
        <form className='col-md-4' onSubmit={handleSubmit}>
            <div className='form-group'>
                <h5 style={{color:"white"}}>SuperHeros</h5> <br />
                <input className='form-control' value={name} type="text" placeholder='Enter SuperHero' onChange={(e)=>setName(e.target.value)} required /> <br />
            </div>
            <div className='form-group'>
                <h5 style={{color:"white"}}>Comic</h5> <br />
                <input className='form-control' value={comic} type="text" placeholder='Enter Comic' onChange={(e)=>setComic(e.target.value)}  required />
            </div>
            <button className='btn btn-primary' type='submit'>submit</button>
        </form>
    </div>
}
export default LastProjectForm