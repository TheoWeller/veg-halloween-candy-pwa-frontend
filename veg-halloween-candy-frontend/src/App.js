import React from 'react';
import {Component, Fragment} from 'react';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom'
import SignupForm from './Components/Login_Signup/SignupForm'
import Login from './Components/Login_Signup/Login'

class App extends Component {
  state = {authenticated: false}

  componentDidMount(){
    // this.checkForToken()
  }

  checkForToken = () => {
    const token = localStorage.token
    if (token) {

      //AUTHENTICATE TOKEN IF EXISTS
      // this.props.fetchArtistCreate(autoLogin(token))
    } else {
      this.setState({authenticated: true})
    }
  }

  render(){
    return (
      <Fragment>
        <SignupForm/>
        <br/>
        <Login/>
      </Fragment>
    );
  }

}

export default App;
