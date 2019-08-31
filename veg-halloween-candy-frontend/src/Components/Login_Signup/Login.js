import React from 'react';
import {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { login, sessionFetch } from '../../actions/sessionActions';
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
      <div style={{"height":"100vh", "width":"100vw"}}>
      <h1 style={{"font-family":'Halloween', "font-size":"3.6rem", "color":"red"}}>Vegan Halloween Candy</h1>
        <form className="container" style={{"background-color":"white", "height":"100%", "width":"100%"}} noValidate autoComplete="off">
          <TextField
            label="Email"
            style={{"width":"60%"}}
            className="textField"
            value={this.state.email}
            onChange={this.handleFormChange("email")}
            margin="normal"
          />
          <br/>
          <TextField
            label="Password"
            className="textField"
            style={{"width":"60%"}}
            type="password"
            value={this.state.password}
            onChange={this.handleFormChange("password")}
            margin="normal"
          />
          <br/>
          <Button
          variant="contained"
          className="button"
          size="large"
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
