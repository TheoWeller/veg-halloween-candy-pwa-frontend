import React from 'react';
import {Component, Fragment} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { flexbox } from '@material-ui/system';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

import { handlePostFetch, createPost, savePost, CREATE } from '../../actions/postActions';
import CreatePostCard from './CreatePostCard'
import ConfirmationModal from './modals/confirmationModal'

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const initialState = {
  title: "",
  content_body: "",
  img_url_1: "",
  img_url_2: "",
  candy_name: "",
  candy_type: "",
  referral_link: "",
  postPreviewOpen: false,
  previewProps: "",
  confirmationOpen: false
}

class CreatePostForm extends Component {

  state = initialState

  handleFormChange = name => event => {
    this.setState({...this.state, [name]: event.target.value})
  }

  handlePreview = (state) => {
    this.setState({
        ...this.state,
        postPreviewOpen: true,
        previewProps: state
      }
    )
  }

  handlePostClick = (state) => {
    this.handlePost(this.state)
  }

  //create post helper function
  handlePost = (state) => {
    delete state.postPreviewOpen
    delete state.urlError

    const payload = {
      ...state,
      token: this.props.token
    }

    this.props.createPost(createPost(payload))
    this.props.handleCloseModal()
  }

  handleSaveClick = (state) => {
    let payload={
      ...this.state,
      token: this.props.token
    }
    delete payload.confirmationOpen
    delete payload.previewProps
    delete payload.postPreviewOpen
    this.props.savePost(savePost(payload))
    this.setState({...this.state, confirmationOpen: false}, this.props.handleCloseModal)
  }

  handleCancelClick = () => {
    this.setState({
      ...this.state,
      confirmationOpen: true
    })
  }

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

  showWidget = (widget) => {
    widget.open()
  }

  render(){
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
          this.setState({ ...this.state, imgUrl1: img1Path, imgUrl2: img2Path})
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

          <Button
            label="upload image"
            variant="contained"
            onClick={() => this.showWidget(myWidget)}
          >
          Upload Image
          </Button>

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
              value={this.state.referralLink}
              onChange={this.handleFormChange("referralLink")}
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
              <TextField
                label="Candy Name"
                className="textField"
                value={this.state.candyName}
                onChange={this.handleFormChange("candyName")}
                margin="normal"
              />
              <TextField
                label="Candy Type"
                className="textField"
                value={this.state.candyType}
                onChange={this.handleFormChange("candyType")}
                margin="normal"
              />
            </Container>
            <br/>
            <br/>
            <Container
              component="div"
              style={
                {"display": "flex",
                "justify-content":"space-between",
                "width":"100%"
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
                label="Save"
                variant="contained"
                onClick={this.handleCancelClick}
              >
              CANCEL
              </Button>
            </Container>
            <br/>
            <br/>
            </Container>
          </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.session.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    savePost: (postContent) => dispatch(handlePostFetch(postContent, "save")),
    createPost: (postContent) => dispatch(handlePostFetch(postContent, "create")),
    dispatch: (action) => dispatch(action)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePostForm));
