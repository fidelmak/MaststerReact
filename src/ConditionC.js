import React, { Component } from 'react'

class ConditionC extends React.Component{
    constructor(props){
        super(props)
        this.state={
            IsLogged:false
        }

    }


    render(){
        
        return (this.state.IsLogged) ?
        <div>welcome Paul</div>:
        <div> welcome Guest</div>

    
    }
}
export default ConditionC