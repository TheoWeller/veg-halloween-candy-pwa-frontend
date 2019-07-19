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

  render(){
    if(!this.props.loading){
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    authenticated: state.session.authenticated,
    userPosts: state.session.userPosts,
    loading: false
  }
}

const mapDispatchToProps = (dispatch) => {
  return {login: (credentials) => dispatch(sessionFetch(credentials, "auto_login"))}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
