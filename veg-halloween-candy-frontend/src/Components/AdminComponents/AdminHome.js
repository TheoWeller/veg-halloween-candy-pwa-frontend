import React from 'react';
import {Component} from 'react';
import Modal from '@material-ui/core/Modal'
import Container from '@material-ui/core/Container';

import Navbar from './Navbar'
import CreatePostCard from './CreatePostCard'
import CreatePostForm from './CreatePostForm'

class AdminHome extends Component {
  state={
    moduleOpen: true
  }

  createPostModal = () => {
    return (
      <Modal open={this.state.moduleOpen}>
        <Container component="div">
          <CreatePostForm/>
        </Container>
      </Modal>
  )
  }
  render(){
    return(
      <div>
      <Navbar logout={this.props.logout}/>
      {this.createPostModal()}
      </div>
    )
  }
}

export default AdminHome;
