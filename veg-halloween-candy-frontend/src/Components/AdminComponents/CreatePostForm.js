import React from 'react';
import {Component} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { flexbox } from '@material-ui/system'

// import Card from '@material-ui/core/Card';
// import { makeStyles } from '@material-ui/core/styles';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class CreatePostForm extends Component {

  state = {
    title: "",
    contentBody: "",
    imgUrl1: "",
    imgUrl2: "",
    candyName: "",
    candyType: "",
    referralLink: ""
  }

  handleFormChange = name => event => {
    this.setState({...this.state, [name]: event.target.value})
  }

  onSubmit = e => {
    debugger
  }
  buttonSpacing = () => {
    return {
      "display": "flex",
      "justify-content": "evenly"
    }
  }

  render(){



    return (
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
              onClick={this.onSubmit}
              label="POST"
            >
            POST
            </Button>
            <Button
              label="SAVE"
              variant="contained"
              onClick={""}
            >
            SAVE
            </Button>
            <Button
              label="Preview"
              variant="contained"
              onClick={""}
            >
            PREVIEW
            </Button>
            <Button
              label="Save"
              variant="contained"
              onClick={""}
            >
            CANCEL
            </Button>
          </Container>
          <br/>
          <br/>
          </Container>
    )
  }
}
export default CreatePostForm;
