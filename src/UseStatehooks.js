
import React, {useState, Usestate} from 'react';

function UseStatehooks() {

    const[score, setScore]=useState(12);
    const handleScore=()=>{
      setScore("hattrick")
    }
  
    return (
      <div>
         
         <h1>Messi has {score} goals</h1>
         <button onClick={handleScore}>click me</button>
         
          
          
        
     
        
      </div>
    );
  }
  
  export default UseStatehooks;