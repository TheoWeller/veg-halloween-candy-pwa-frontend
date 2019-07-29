import React from 'react';
import {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CreatePostCard from './CreatePostCard'

class PostIndex extends Component {

  renderPosts = (post) => {
    return post.map(post => <CreatePostCard content={post} />)
  }

  render(){
    console.log("PROPZ", this.props);

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

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));
