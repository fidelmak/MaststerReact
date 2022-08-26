import React, { Component } from 'react'

class Lifecycle extends React.Component{
    componentWillMount(){
        alert("Before component rendered")
    }
    componentDidMount(){
        alert("After did Mount")
    }
    render(){
        return <>
        <h1> lifecycle in React js</h1>
        <h1> ComponentWillMount </h1>
        <h1>ComponentDidMount</h1>
        </>
    }
    
}
export default Lifecycle