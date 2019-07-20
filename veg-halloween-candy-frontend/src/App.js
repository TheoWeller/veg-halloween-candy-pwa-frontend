import React from 'react';
import {Component, Fragment} from 'react';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


import SignupForm from './Components/Login_Signup/SignupForm'
import Login from './Components/Login_Signup/Login'
import AdminHome from './Components/AdminComponents/AdminHome'

import { autoLogin, sessionFetch } from './actions/sessionActions'

class App extends Component {

  componentDidMount(){
    this.checkForToken()
  }

  checkForToken = () => {
    const token = localStorage.vhcToken
    if (token) {
      this.props.login(autoLogin(token))
    }
  }

  render(){
    if(this.props.loading === false || this.props.authenticated){
      if(this.props.authenticated && this.props.currentUser){
        return (
          <AdminHome
          currentUser={this.props.currentUser}
          token={this.props.token}
          posts={this.props.userPosts}
          />
        )
      } else {
        return (
          <Fragment>
          <SignupForm />
          <br/>
          <Login />
          </Fragment>
        )
      }//end of nested "if" statement
    } else {
      return <h1>"LOADING..."</h1>
    }//end of outer "if" statement
  }
}

const mapStateToProps = (state) => {
  console.log("APPP PROPSS",state.session);
  return {
    currentUser: state.session.currentUser,
    authenticated: state.session.authenticated,
    userPosts: state.session.userPosts,
    loading: state.session.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {login: (credentials) => dispatch(sessionFetch(credentials, "auto_login"))}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
