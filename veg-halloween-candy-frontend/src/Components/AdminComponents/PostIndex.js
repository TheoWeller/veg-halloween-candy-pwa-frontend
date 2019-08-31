import React from 'react';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CreatePostCard from './CreatePostCard'

class PostIndex extends Component {
  //renderPosts works off of draftView to render posts
  renderPosts = (posts) => {
    const sortedPosts = posts.sort((a,b) => (a.rank > b.rank) ? 1 : ((b.rank > a.rank) ? -1 : 0));
    return posts.map(post => {
      if(post.draft === this.props.draftView){
        return(
        <CreatePostCard
          handleEditPost={this.props.handleEditPost}
          content={post}
          admin={this.props.admin}
        />
      )};
    });
  };

  render(){
    return this.renderPosts(this.props.posts)
  }//end render
}//end PostIndex

const mapStateToProps = (state) => {
  return {
    posts: state.session.userPosts
  }
}

export default withRouter(connect(mapStateToProps)(PostIndex));
