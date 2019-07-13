import React from 'react';
import {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { login } from '../fetches'

class SignupForm extends Component {

  state = { password: "", email: "" }

  handleFormChange = name => event => {
    this.setState({...this.state, [name]: event.target.value})
  }

  onSubmit = e => {
    login(this.state)
    .then(data => {
      if(data.status === "success"){
        localStorage.setItem("vhcToken", data.token)
        this.props.loginSuccess(data)
      }
    })
  }

  render(){
    // console.log("State", this.state);
    return (
      <div>
        <form className="container" noValidate autoComplete="off">
          <TextField
            label="Email"
            className="textField"
            value={this.state.email}
            onChange={this.handleFormChange("email")}
            margin="normal"
          />
          <br/>
          <TextField
            label="Password"
            className="textField"
            type="password"
            value={this.state.password}
            onChange={this.handleFormChange("password")}
            margin="normal"
          />
          <br/>
          <Button
          variant="contained"
          className="button"
          onClick={this.onSubmit}
          >
          Login
          </Button>
        </form>
      </div>
    )
  }

}

export default SignupForm;
