import React from 'react';
import {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { login, sessionFetch } from '../../actions/sessionActions'
import { withRouter } from 'react-router'

class LoginForm extends Component {

  state = { password: "", email: "" }

  handleFormChange = name => event => {
    this.setState({...this.state, [name]: event.target.value})
  }

  onSubmit = () => {
    this.props.login(login(this.state.email, this.state.password))
  }

  render(){
    return (
      <div>
        <form className="container" style={{"background-color":"white"}} noValidate autoComplete="off">
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

const mapDispatchToProps = (dispatch) => {
  return {login: (credentials) => dispatch(sessionFetch(credentials, "login"))}
}

export default withRouter(connect(null, mapDispatchToProps)(LoginForm))
