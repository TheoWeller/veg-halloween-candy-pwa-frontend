import React from 'react';
import {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { createUser } from '../fetches'

class SignupForm extends Component {

  state = {
    username: "",
    password: "",
    email: "",
    passwordConfirmation: "",
    passwordError: false
  }

  handleFormChange = name => event => {
    this.setState({...this.state, [name]: event.target.value})
  }

  onSubmit = e => {
    if(this.state.password === this.state.passwordConfirmation){
      createUser(this.state)
    } else {
      this.setState({...this.state, passwordError: true})
    }
  }

  render(){
    return (
      <div>
        <form className="container" noValidate autoComplete="off">
          <TextField
            label="Username"
            className="textField"
            value={this.state.username}
            onChange={this.handleFormChange("username")}
            margin="normal"
          />
          <br/>
          <TextField
            label="Email"
            className="textField"
            value={this.state.email}
            onChange={this.handleFormChange("email")}
            margin="normal"
          />
          <br/>
          <TextField
            error={this.state.passwordError}
            label="Password"
            className="textField"
            type="password"
            value={this.state.password}
            onChange={this.handleFormChange("password")}
            margin="normal"
          />
          <br/>
          <TextField
            error={this.state.passwordError}
            label="Confirm Password"
            className="textField"
            type="password"
            value={this.state.passwordConfirmation}
            onChange={this.handleFormChange("passwordConfirmation")}
            margin="normal"
          />
          <br/>
          <Button
          variant="contained"
          className="button"
          onClick={this.onSubmit}
          >
          Create Account
          </Button>
        </form>
      </div>
    )
  }

}

export default SignupForm;
