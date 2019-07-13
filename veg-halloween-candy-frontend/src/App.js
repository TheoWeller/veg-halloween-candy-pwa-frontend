import React from 'react';
import {Component, Fragment} from 'react';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom'

import SignupForm from './Components/Login_Signup/SignupForm'
import Login from './Components/Login_Signup/Login'
import AdminHome from './Components/AdminComponents/AdminHome'

import { autoLogin } from './Components/fetches'

class App extends Component {
  state = {
    authenticated: false,
    currentUser: "",
    userPosts: "",
    token: "",
    loading: true
  }

  componentDidMount(){
    this.checkForToken()
  }

  checkForToken = () => {
    const token = localStorage.vhcToken
    if (token) {
      autoLogin(token)
      .then(data => {
        if(data.status === "success"){
          this.setState({
            ...this.state,
            loading: false,
            authenticated: true,
            currentUser: data.currentUser,
            userPosts: data.posts
          })//end set state
        }//end nested conditional
      })//end promise
    }//end outer conditional
  }

  loginSuccess = payload => {
    this.setState({
      ...this.state,
      authenticated: true,
      loading: false,
      currentUser: payload.current_user,
      userPosts: payload.posts,
      token: payload.token
    })//end set state

  }

  logout = () => {
    localStorage.removeItem("vhcToken")
    this.setState({
      authenticated: false,
      currentUser: null,
      userPosts: null
    })
  }

  render(){
    if(!this.state.loading){
      if(this.state.authenticated && this.state.currentUser){
        return (
          <AdminHome
          currentUser={this.state.currentUser}
          logout={this.logout}
          token={this.state.token}
          />
        )
      } else {
        return (
          <Fragment>
          <SignupForm/>
          <br/>
          <Login loginSuccess={this.loginSuccess}/>
          </Fragment>
        );
      }
    } else {
      return <h1>"LOADING..."</h1>
    }
  }
}

export default App;
