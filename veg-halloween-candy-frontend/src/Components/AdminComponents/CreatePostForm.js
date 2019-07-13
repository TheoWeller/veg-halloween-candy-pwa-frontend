import React from 'react';
import {Component, Fragment} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { flexbox } from '@material-ui/system'
import Modal from '@material-ui/core/Modal';

import CreatePostCard from './CreatePostCard'
import { createPost, savePost } from '../fetches'

// import Card from '@material-ui/core/Card';
// import { makeStyles } from '@material-ui/core/styles';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const initialState = {
  title: "",
  contentBody: "",
  imgUrl1: "",
  imgUrl2: "",
  candyName: "",
  candyType: "",
  referralLink: "",
  postPreviewOpen: false,
  previewProps: "",
  urlError: ""
}

class CreatePostForm extends Component {

  state = initialState

  handleFormChange = name => event => {
    this.setState({...this.state, [name]: event.target.value})
  }

  urlErrorSetState = () => {
    return this.state.urlError ? true : false
  }

  helperTextHandler = () => {
    const message = "ENTER VALID URL: http://www.blursed.com"
    return this.state.urlError ? message : ""
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

  handlePost = (state) => {
    delete state.postPreviewOpen
    delete state.urlError

    const payload = {
      ...state,
      token: this.props.token,
      userId: this.props.currentUser.id
    }
    createPost(payload)
    .then(data => {
      data.status ? this.setState(initialState, this.props.handleCancel) : alert("Failed to post.")
    })
  }

  handleSave = (state) => {
    savePost
  }

  handleModuleExitClick = () => {
    this.setState({...this.state, postPreviewOpen: false})
  }

  clickConfirmation = () => {

  }

  postPreview = (content) => {
    return (
      <Modal
        open={this.state.postPreviewOpen}
        fullWidth
        onBackdropClick={this.handleModuleExitClick}
        onEscapeKeyDown={this.handleModuleExitClick}
      >
        <Container
        component="div"
        style={{"width":"100%", "height":"100%"}}
        >
        <CreatePostCard content={content}/>
          <Button
            label="Exit"
            variant="contained"
            onClick={this.handleModuleExitClick}
          >
            Exit
          </Button>
        </Container>
      </Modal>
    )
  }

  render(){
    return (
      <Fragment>
        {this.state.previewProps && this.postPreview(this.state.previewProps)}
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
            <TextField
              label="Image URL"
              className="textField"
              fullWidth
              value={this.state.imgUrl1}
              onChange={this.handleFormChange("imgUrl1")}
              margin="normal"
            />
            <TextField
              label="Backup image URL"
              className="textField"
              fullWidth
              value={this.state.imgUrl2}
              onChange={this.handleFormChange("imgUrl2")}
              margin="normal"
            />
            <br/>
            <TextField
              label="Content Body"
              className="textField"
              variant="outlined"
              fullWidth
              multiline
              rows={10}
              value={this.state.contentBody}
              onChange={this.handleFormChange("contentBody")}
              margin="normal"
            />
            <br/>
            <TextField
              label="Referral Link"
              className="textField"
              helperText={this.helperTextHandler()}
              error={this.urlErrorSetState()}
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
                label="Preview"
                variant="contained"
                onClick={() => this.handlePreview(this.state)}
              >
              PREVIEW
              </Button>
              <Button
                label="SAVE"
                variant="contained"
                onClick={this.handleSave}
              >
              SAVE
              </Button>
              <Button
                label="Save"
                variant="contained"
                onClick={this.props.handleCancel}
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
export default CreatePostForm;
