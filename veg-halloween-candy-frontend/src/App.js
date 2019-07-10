import React from 'react';
import {Component, Fragment} from 'react';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom'

import SignupForm from './Components/Login_Signup/SignupForm'
import Login from './Components/Login_Signup/Login'

import { autoLogin } from './Components/fetches'

class App extends Component {
  state = {
    authenticated: false,
    currentUser: null,
    userPosts: null
  }

  componentDidMount(){
    this.checkForToken()
  }

  checkForToken = () => {
    const token = localStorage.token
    if (token) {
      autoLogin(token)
      .then(data => {
        if(data.status === "success"){
          this.setState({
            ...this.state,
            authenticated: true,
            currentUser: data.currentUser,
            userPosts: data.posts
          })//end set state
        }//end nested conditional
      })//end promise
    }//end outer conditional
  }

  loginSuccess = payload => {
    debugger
    this.setState({
      ...this.state,
      authenticated: true,
      currentUser: payload.current_user,
      userPosts: payload.posts
    })//end set state
  }

  render(){
    console.log("APP STATE", this.state)
    return (
      <Fragment>
        <SignupForm/>
        <br/>
        <Login loginSuccess={this.loginSuccess}/>
      </Fragment>
    );
  }

}

export default App;
