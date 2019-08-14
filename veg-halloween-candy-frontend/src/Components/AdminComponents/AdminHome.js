import React from 'react';
import {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions'

import Container from '@material-ui/core/Container';
import Navbar from './Navbar'
import CreatePostForm from './CreatePostForm'
import PostIndex from './PostIndex'

//
let currentPost;

class AdminHome extends Component {
  //callback passed down to navbar when clicked drafts are rendered in postIndex
  state = { modalOpen: false, draftView: false }

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
            handleCloseModal={this.handleCloseModal}
            editPostContent={this.state.editPostContent}
          />
        </Container>
      </Dialog>
    )
  }

  handleCloseModal = () => {
    this.setState({...this.state, modalOpen: false})
  };

  handleCreatePost = () => {
    this.setState({...this.state, modalOpen: true})
  };

  handleEditPost = (postContent) => {
    currentPost = postContent.id
    this.setState({...this.state, modalOpen: true, editPostContent: postContent})
  };

  handlePostCreated = () => {
    this.setState({...this.state, modalOpen: false})
  };

  handleDraftClick = () => {
    this.setState({...this.state, draftView: !this.state.draftView})
  }

  render(){
    return(
      <div>
      <Navbar
        logout={this.props.logout}
        handleCreatePost={this.handleCreatePost}
        handleDraftClick={this.handleDraftClick}
      />
      <Container maxWidth="md">
        <PostIndex
          admin={this.props.currentUser.admin}
          handleEditPost={this.handleEditPost}
          draftView={this.state.draftView}
        />
      </Container>
      {this.createPostModal()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    authenticated: state.session.authenticated,
    content: state.session.userPosts,
    loading: false
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminHome));
