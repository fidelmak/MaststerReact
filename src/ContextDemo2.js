import React, {useContext} from 'react'
import { GlobalContext } from './GlobalContext'
const ContextDemo2 =()=>{
    const framework = useContext(GlobalContext)
    return <>
    <h1> context Api Demo {framework} </h1>
    </>
}
export default ContextDemo2
