import React from 'react';
import {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CreatePostCard from './CreatePostCard'

class PostIndex extends Component {

  renderPosts = (posts) => {
    return posts.map(post => {
      if(!post.draft){
        return(
        <CreatePostCard
          handleEditPost={this.props.handleEditPost}
          content={post}
          admin={this.props.admin}
        />
      )}
    })
  }

  render(){
    return (
      this.renderPosts(this.props.posts)
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.session.userPosts
  }
}

export default withRouter(connect(mapStateToProps)(PostIndex));
