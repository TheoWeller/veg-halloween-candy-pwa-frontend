import React from 'react';
import {Component} from 'react';

import Navbar from './Navbar'

class AdminHome extends Component{
  render(){
    return(
      <div>
      <Navbar logout={this.props.logout}/>
      <p>Home!</p>
      </div>
    )
  }
}

export default AdminHome;
