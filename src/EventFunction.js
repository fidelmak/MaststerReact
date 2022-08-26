import React from 'react'


function EventFunction(){
   function  handleClic(){
       console.log("Button is clicked in Function")

    }
    return <>
    <h1>Hello World</h1>
    <button onClick={handleClic}>Click me </button>
    </>
}
export default EventFunction