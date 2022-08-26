import React,{useContext} from "react" 

import { LastProjectContextFile } from "./LastProjectContextFile"


const design={
    background:"black",
    heoght:"60px",
    color:"white",
    display:"flex",
    justifyContent:"space-around"

}
const LastProjectNav = () =>{
    const {heros} = useContext(LastProjectContextFile)
    return <div style={design}>
    <h2>SuperHeros</h2>
    <h2>List of Heroes: {heros.length}</h2>
    </div>

} 
export default  LastProjectNav