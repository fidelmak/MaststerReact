import React from 'react'
import {Link} from 'react-router-dom'

var link = {
    color:"white",
    textDecoration:"none",
    backgroundColor:'blue',
    padding:"7px",
    borderRadius:"5px",
    fontSize:"20px",
    fontStyle:"bold",
    margin:"20px",

}



const Nav =()=>{

    
    return <div style={{ backgroundColor:"crimson"}}>


<nav  style ={{padding:"30px", display:"inline-flex" }}>


<ul style ={{ display:"inline-flex",listStyleType:"none"}}>

   <li > <Link style={link} to='/'> Home </Link> </li>
   <li > <Link style={link} to ='/About'>About</Link></li>
    <li ><Link style={link} to ='/Contact'>Contact</Link> </li>
    
    </ul>






    {/* <ul className="d-inline-flex " id="navbarsExample09" >
   <li className="navbar-nav border border-primary p-1 rounded bg-info text-light"> <Link className="nav-link" to='/'>home </Link> </li>
   <li className="navbar-nav mx-2 border border-primary p-1 rounded bg-info text-light "> <Link className="nav-link"  to ='/About'>about</Link></li>
    <li className="navbar-nav border border-primary p-1 rounded bg-info text-light"><Link className="nav-link" to ='/Contact'>contact</Link> </li>
    
    </ul> */}





</nav>
        
</div>

 

    

}
export default Nav




