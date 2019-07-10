import React from 'react';
import {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import FormControl from 'material-ui/core/FormControl';
// import InputLabel from 'material-ui/core/InputLabel';

class SignupForm extends Component {

  state = {username: "", password: "", email: "", passwordConfirmation: ""}

  handleFormChange = name => event => {
    this.setState({...this.state, [name]: event.target.value})
  }

  onSubmit = e => {
    console.log("CLICKED");
  }

  render(){
    console.log("State", this.state);
    return (
      <div>
        <form className="container" noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Username"
            className="textField"
            value={this.state.username}
            onChange={this.handleFormChange("username")}
            floatingLabelFixed
            margin="normal"
          />
          <br/>
          <TextField
            id="standard-name"
            label="Email"
            className="textField"
            value={this.state.email}
            onChange={this.handleFormChange("email")}
            floatingLabelFixed
            margin="normal"
          />
          <br/>
          <TextField
            id="standard-name"
            label="Password"
            className="textField"
            type="password"
            value={this.state.password}
            onChange={this.handleFormChange("password")}
            floatingLabelFixed
            margin="normal"
          />
          <br/>
          <TextField
            id="standard-name"
            label="Confirm Password"
            className="textField"
            type="password"
            value={this.state.email}
            onChange={this.handleFormChange("passwordConfirmation")}
            floatingLabelFixed
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
