import React, { Component } from 'react'

class FormHandling extends React.Component{
    constructor(props){
        super()
        this.state={
            user:'',
            lang:''
        }
    }

    handleInput=(event)=>{
        this.setState({
            user:event.target.value
        })
    }
    handleSelect=(event)=>{
        this.setState({
            lang:event.target.value
        })

    }
    handleSubmit=(event)=>{
        event.preventDefault()
        alert(`Username is ${this.state.user}\n Favoutite language is ${this.state.lang}`)
    }

    render(){
        return <>
         <h2>Here is our form</h2>
        <form onSubmit={this.handleSubmit}>
            <label>Username</label>
            <input type="text" 
            value={this.state.user} 
            onChange={this.handleInput} />
            <br />
            <br />
            <label>favourite language</label>
            <select value={this.state.lang} onChange={this.handleSelect}>
              <option value='java'>Java</option> 
              <option value="javascript">javascript</option> 
              <option value="python">python</option> 
              <option value="c#">c#</option> 
            </select>
            <br />
            <br />
            <button>submit</button>
        </form>

        </>
    }
}
export default FormHandling