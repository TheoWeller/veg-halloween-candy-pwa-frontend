import React from 'react';
import {Component, Fragment} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { flexbox } from '@material-ui/system';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

import { handlePostFetch, createPost, saveDraft, editPost, deletePost } from '../../actions/postActions';
import CreatePostCard from './CreatePostCard'
import ConfirmationModal from './modals/confirmationModal'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { makeStyles } from '@material-ui/core/styles';


const initialState = {
  title: "",
  content_body: "",
  rank: "",
  image_url_1: "",
  image_url_2: "",
  referral_link: "",
  confirmationOpen: false
}

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

class CreatePostForm extends Component {
  state = initialState

  componentDidMount(){
    let editState = {
      ...this.props.editPostContent,
      draft: true,
      confirmationOpen: false,
      editState: true
    }
    this.props.newPost ? this.setState(initialState) : this.setState(editState)

  }

  classes = () => useStyles();

  handleFormChange = name => event => {
    this.setState({...this.state, [name]: event.target.value})
  }

  handlePostClick = (state) => {
    this.handlePost(this.state)
    this.setState(initialState, this.props.handleCloseModal)
  }

  //create post helper function
  handlePost = (state) => {
    const payload = {
      ...state,
      token: this.props.token
    }
    //payload sent to postActions.js
    this.props.createPost(createPost(payload))
    this.props.handleCloseModal()
  }

  handleSaveClick = () => {
    let payload={ ...this.state, token: this.props.token }
    delete payload.confirmationOpen
    //save or edit conditional
    this.props.editPostContent.draft ? this.props.savePost(saveDraft(payload)) : this.props.editPost(editPost(payload))
    this.setState({...this.state, confirmationOpen: false}, this.props.handleCloseModal)
  }

  handleCancelClick = () => {
    this.setState({
      ...this.state,
      confirmationOpen: true
    })
  }

  handleDeletePostClick = (userId, postId) => {
    const payload = { userId, postId }
    this.props.deletePost(deletePost(payload));
    this.props.handleCloseModal();
  };

  handleModuleExitClick = () => {
    this.setState({...this.state, postPreviewOpen: false})
  }

  cancelPost = (yesOrNo) => {
    if(yesOrNo){
      this.setState({
        ...this.state,
        confirmationOpen: false
      }, this.props.handleCloseModal)
    } else {
      this.setState({...this.state, confirmationOpen: false})
    }
  }

  confirmationModal = () => {
    return (
      <ConfirmationModal
        isOpen={this.state.confirmationOpen}
        cancelPost={this.cancelPost}
      />
    )
  }

  determineRankSelectOptions = (posts) => {
    const activePosts = posts.filter(post => !post.draft)
    //creates array of possible rank select options
    const printMe = [...Array(activePosts.length + 2).keys()];
    printMe.shift()
    return printMe.map(val => {
      return <option value={val}>{val}</option>
    })
  }

  showWidget = (widget) => {
    widget.open()
  }

  render(){
    //CLOUDINARY UPLOAD HANDLER
    let myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dvlthlwhv',
      uploadPreset: 'ppn7wtzd'}, (error, result) => {
        if (!error && result && result.event === "success") {
          //TODO: DETERMINE OPTIMAL IMAGE LINK FOR RESIZING NEEDS
          //q_auto = quality, f_auto = format, c_fill = crop & fill
          const desktopParams = 'w_900,h_500,q_auto,f_auto'
          const phoneParams = 'w_450,h_250,q_auto,f_auto'
          const img1Path = `https://res.cloudinary.com/dvlthlwhv/image/upload/${desktopParams}/${result.info.path}`
          const img2Path = `https://res.cloudinary.com/dvlthlwhv/image/upload/${phoneParams}/${result.info.path}`
          this.setState({ ...this.state, image_url_1: img1Path, image_url_2: img2Path })
        }
    })
    return (
      <Fragment>
        {this.state.previewProps && this.postPreview(this.state.previewProps)}
        {this.state.confirmationOpen && this.confirmationModal()}
        <Container component="div">
          <Container
          component="div"
          style={
            {"display": "flex",
            "justify-content":"center",
            "width":"100%"
          }}
          >
            <TextField
              autoFocus
              fullWidth
              label="Title"
              className="textField"
              value={this.state.title}
              onChange={this.handleFormChange("title")}
              margin="normal"
            />
          </Container>
          <br/>
            <Container
              component="div"
              style={{
                "width":"100%",
                display: "grid",
                alignItems: "center",
                justifyItems: "center"
              }}
            >
            <Button
              label="upload image"
              variant="contained"
              onClick={() => this.showWidget(myWidget)}
            >
            Upload Image
            </Button>

      <FormControl className={this.classes.formControl} style={{"margin-top":"3%", "min-width":"5em"}}>
        <InputLabel htmlFor="age-native-simple">RANK</InputLabel>
        <Select
          native
          value={this.state.rank}
          onChange={this.handleFormChange('rank')}
          inputProps={{
            name: 'rank',
            id: 'age-native-simple',
          }}
        >
          {this.props.newPost && <option value={""}></option>}
          {this.determineRankSelectOptions(this.props.posts)}
        </Select>
      </FormControl>
          </Container>
            <br/>
            <TextField
              label="Content Body"
              className="textField"
              variant="outlined"
              fullWidth
              multiline
              rows={10}
              value={this.state.content_body}
              onChange={this.handleFormChange("content_body")}
              margin="normal"
            />
            <br/>
            <TextField
              label="Referral Link"
              className="textField"
              fullWidth
              value={this.state.referral_link}
              onChange={this.handleFormChange("referral_link")}
              margin="normal"
            />
            <br/>
            <Container
              component="div"
              style={
                {
                "display": "flex",
                "justify-content":"space-between"
              }}
            >
            </Container>
            <br/>
            <br/>
              <div
              style={{
                "display": "grid",
                "grid-template-columns": "repeat(auto-fit, minmax(5em, 1fr))",
                "grid-gap": "1rem"
              }}
              >
                <Button
                  variant="contained"
                  className={"Button"}
                  onClick={() => this.handlePostClick(this.state)}
                  label="POST"
                >
                POST
                </Button>
                <Button
                  label="SAVE"
                  variant="contained"
                  onClick={this.handleSaveClick}
                >
                SAVE
                </Button>
                <Button
                  label="DELETE"
                  variant="contained"
                  onClick={() => this.handleDeletePostClick(this.state.user_id, this.state.id)}
                >
                DELETE
                </Button>
                <Button
                  label="Save"
                  variant="contained"
                  onClick={this.handleCancelClick}
                >
                CANCEL
                </Button>
              </div>
            <br/>
            <br/>
            </Container>
          </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.session.token,
    posts: state.session.userPosts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    savePost: (postContent) => dispatch(handlePostFetch(postContent, "save")),
    createPost: (postContent) => dispatch(handlePostFetch(postContent, "create")),
    editPost: (postContent) => dispatch(handlePostFetch(postContent, "edit")),
    deletePost: (payload) => dispatch(handlePostFetch(payload, "delete")),
    dispatch: (action) => dispatch(action)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePostForm));
