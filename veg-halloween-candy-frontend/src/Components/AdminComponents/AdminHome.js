import React from 'react';
import {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';

import Container from '@material-ui/core/Container';
import Navbar from './Navbar'
import CreatePostForm from './CreatePostForm'

class AdminHome extends Component {
  state = {
    modalOpen: false
  }

  createPostModal = () => {
    return (
      <Dialog
      open={this.state.modalOpen}
      aria-labelledby="create candy review"
      aria-describedby="add title, image url, review content, candy name, ect"
      fullWidth
      >
        <Container component="div">
          <CreatePostForm
            currentUser={this.props.currentUser}
            token={this.props.token}
            handleCancel={this.handleCancel}
            handlePost={this.handlePost}
          />
        </Container>
      </Dialog>
    )
  }

  handleCancel = () => {
    this.setState({...this.state, modalOpen: false})
  }



  handleCreatePost = () => {
    this.setState({...this.state, modalOpen: true})
  }


  render(){
    return(
      <div>
      <Navbar
        logout={this.props.logout}
        handleCreatePost={this.handleCreatePost}
      />
      {this.createPostModal()}
      </div>
    )
  }
}

export default AdminHome;
