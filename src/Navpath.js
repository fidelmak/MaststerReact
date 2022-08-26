import React from 'react'
import { Outlet, Link} from 'react-router-dom'
const Navpath =()=>{


    return <div>
    <ul>
   <li> <Link style={{padding:"30px"}} to='/'>home</Link> </li>
   <li> <Link  style={{padding:"30px"}} to ='/About'>about</Link></li>
    <li><Link  style={{padding:"30px"}} to ='/Contact'>contact</Link> </li>
    <li><a href='/Contact'>element</a> </li>
    </ul>
    </div>

}
export default Navpath