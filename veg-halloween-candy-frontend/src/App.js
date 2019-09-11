import React, { Suspense } from 'react';
import {Component, Fragment} from 'react';
import {Switch, Route, Redirect, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import './App.css'

import SignupForm from './Components/Login_Signup/SignupForm'
const Home = React.lazy(() => import('./Components/ClientComponents/Home'))
const Login = React.lazy(() => import('./Components/Login_Signup/Login'))
const AdminHome = React.lazy(() => import('./Components/AdminComponents/AdminHome'))
const NotFound = React.lazy(() => import('./Components/404NotFound'))

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
      if(!this.props.loading){
        if(this.props.authenticated && this.props.currentUser){
          return (
            <Suspense fallback={<div>loading.....</div>}>
              <Redirect to="/dashboard"/>
              <Route exact path='/dashboard' render={(history) => {
                return (
                <AdminHome
                  currentUser={this.props.currentUser}
                  token={this.props.token}
                  posts={this.props.userPosts}
                />)
              }}/>
            </Suspense>
          )
        } else {
          return (
            <Suspense fallback={<div>loading.....</div>}>
              <Switch>
                <Route exact path='/super-spooky-login' component={Login}/>
                <Route exact path='/' component={Home}/>
                <Route component={NotFound}/>
              </Switch>
            </Suspense>
          )
        }//end of nested "if" statement
      } else {
        return <h1>"LOADING..."</h1>
      }//end of outer "if" statement
  }
}

const mapStateToProps = (state) => {
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
