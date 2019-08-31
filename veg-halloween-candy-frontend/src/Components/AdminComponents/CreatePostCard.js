import React from 'react';
import {Component, Fragment} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles({
  card: {maxWidth: "100%"}
});

function openInNewTab(url) {
  let win = window.open(url, '_blank');
  win.focus();
}

const handleShopNowClick = (url) => {
  openInNewTab(url)
}

const ifAdmin = (handleEditPost, postContent) => {
  return (
    <CardHeader
      action={
        <IconButton aria-label="edit post">
          <CreateIcon onClick={() => handleEditPost(postContent)} />
        </IconButton>
      }
    />
  )
}

export default function CreatePostCard(props){
const classes = useStyles();
  return (
    <Fragment>
      <br/>
      <Card className={classes.card} raised id={props.content.id}>
        {props.admin && ifAdmin(props.handleEditPost, props.content)}
          <CardMedia
            component="img"
            alt="desc"
            src={props.content.image_url_1}
            title="title"
          />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.content.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.content.content_body}
                </Typography>
              </CardContent>
              <CardActions disableSpacing style={{"display":"flex", "justify-content":"flex-start"}}>
                <Button
                  size="large"
                  color="primary"
                  variant="outlined"
                  onClick={() => handleShopNowClick(props.content.referral_link)}>
                    BUY NOW
                </Button>
              </CardActions>
      </Card>
      <br/>
    </Fragment>
  )
}


// <TextareaAutosize aria-label="Minimum height" rows={10}/>
