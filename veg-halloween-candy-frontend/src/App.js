import React, { Suspense } from 'react';
import {Component, Fragment} from 'react';
import {Switch, Route, Redirect, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import './App.css'

import SignupForm from './Components/Login_Signup/SignupForm'
// import Login from './Components/Login_Signup/Login'
// import AdminHome from './Components/AdminComponents/AdminHome'
// import Home from './Components/ClientComponents/Home'

const Home = React.lazy(() => import('./Components/ClientComponents/Home'))
const Login = React.lazy(() => import('./Components/Login_Signup/Login'))
const AdminHome = React.lazy(() => import('./Components/AdminComponents/AdminHome'))

import { autoLogin, sessionFetch } from './actions/sessionActions'


// class DynamicImport extends Component {
//   state = { component: null }
//
// componentWillMount(){
//   this.props.load()
//   .then((module) => this.setState(() => {
//     component: module.default
//   }))
// }
//   render() {
//     return this.props.children(this.state.component)
//   }
// }
//
// const Home = (props) => {
//   <DynamicImport load={() => import('./Components/ClientComponents/Home')}>
//     {(Component) => Component === null
//     ? <h1>loading...</h1>
//     : <Component {...props}/>}
//   </DynamicImport>
// }

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
      if(!this.props.loading || this.props.authenticated){
        if(this.props.authenticated && this.props.currentUser){
          return (
            <Suspense fallback={<div>loading.....</div>}>
              <AdminHome
              currentUser={this.props.currentUser}
              token={this.props.token}
              posts={this.props.userPosts}
              />
            </Suspense>
          )
        } else {
          return (
            <Suspense fallback={<div>loading.....</div>}>
              <Fragment>
                <Route exact path='/super-spooky-login' component={Login}/>
                <Route exact path='/' component={Home}/>
              </Fragment>
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
