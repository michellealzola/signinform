import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         email: '',
         password: '',
         confirm: ''         
      }
    }

    handleUserNameChange = (event) =>{
        this.setState({
            username : event.target.value
        })
    }

    handleEmailChange = (event) =>{
        this.setState({
            email : event.target.value
        })
    }

    handlePasswordChange = (event) =>{
        this.setState({
            password : event.target.value
        })
    }

    handleConfirmPasswordChange = (event) =>{
        this.setState({
            confirm : event.target.value
        })
    }
    
    handleSubmit = (event) =>{                   
        event.preventDefault();

        if(this.state.confirm !== this.state.password)
            {
                alert('Passwords do not match');
            }
            else
            {
                alert(`${this.state.username}
                ${this.state.email}
                ${this.state.password}
                ${this.state.confirm}`);
            }
    }
    
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username </label>
                <input type='text' value={this.state.username} onChange={this.handleUserNameChange}></input>
            </div>
            <div>
                <label>Email </label>
                <input type='email' value={this.state.email} onChange={this.handleEmailChange}></input>
            </div>
            <div>
                <label>Password </label>
                <input type='text' value={this.state.password} onChange={this.handlePasswordChange}></input>
            </div>
            <div>
                <label>Confirm Password </label>
                <input type='text' value={this.state.confirm} onChange={this.handleConfirmPasswordChange}></input>
            </div>
            <div className='btn'>
                <button>Submit</button>
            </div>            
            
        </form>
        
    )
  }
}

export default Form