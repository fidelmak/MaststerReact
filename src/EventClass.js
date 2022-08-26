import React, { Component } from 'react'
class EventClass extends React.Component{
    Clickme(){
        console.log("you clicked me ")
    }
    render(){
        return<> <h1> this is event handling in class</h1>
        <button onClick={this.Clickme}>click moi</button>
        </>
    }
}
export default EventClass