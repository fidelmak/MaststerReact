import React, { Component } from 'react'

class Header extends React.Component {
    // eslint-disable-next-line
    constructor(props){
        super(props)
        this.state={
            message: "welcome to ReactLearn"

        }

        
    }
    handleButton() {
        this.setState({
            message:"thank you for coming "
        })
    }
    render() {
        return <>
        <h2>{this.state.message}</h2>
        <br />
        <br />
        <button onClick={()=> this.handleButton() }> click me </button>
        </>
    }
}




export default Header