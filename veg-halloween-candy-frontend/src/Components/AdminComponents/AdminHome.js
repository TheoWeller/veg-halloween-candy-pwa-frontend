import React from 'react';
import {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions'

import Container from '@material-ui/core/Container';
import Navbar from './Navbar'
import CreatePostForm from './CreatePostForm'

class AdminHome extends Component {
  state = { modalOpen: false }

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
            handleCancel={this.handleCancel}
            handlePost={this.handlePost}
            handlePostCreated={this.handlePostCreated}
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

  handlePostCreated = () => {
    this.setState({...this.state, modalOpen: false})
  }


  render(){
    console.log("ADMINHOME", this.props.userPosts.length);
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    authenticated: state.session.authenticated,
    userPosts: state.session.userPosts,
    loading: false
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminHome));
