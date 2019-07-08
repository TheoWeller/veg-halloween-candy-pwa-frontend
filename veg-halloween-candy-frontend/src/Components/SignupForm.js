import React from 'react';
import {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class SignupForm extends Component {
  state = {username: "", password: "", email: ""}

  handleFormChange = (event) => {
    console.log("EVENT", event);
    // this.setState({})
  }

  render(){
    return (
      <TextField
        id="username"
        type="string"
        onChange={this.handleFormChange}
        placeholder="Username"
      />
    )
  }

}

export default SignupForm;
