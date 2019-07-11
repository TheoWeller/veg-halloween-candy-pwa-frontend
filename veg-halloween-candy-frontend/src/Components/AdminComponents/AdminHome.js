import React from 'react';
import {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';

import Container from '@material-ui/core/Container';
import Navbar from './Navbar'
import CreatePostCard from './CreatePostCard'
import CreatePostForm from './CreatePostForm'

class AdminHome extends Component {
  state = {
    modalOpen: true
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
          <CreatePostForm/>
        </Container>
      </Dialog>
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
