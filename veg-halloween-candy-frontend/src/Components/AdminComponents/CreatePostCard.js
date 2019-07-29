import React from 'react';
import {Component} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles({
  card: {maxWidth: "100%"}
});

function openInNewTab(url) {
  let win = window.open(url, '_blank');
  win.focus();
}

const handleShopNowClick = (url) => {
  console.log("URL", url);
  openInNewTab(url)
}

const ifAdmin = (boolean) => {
  return (
    <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
  )
}

export default function CreatePostCard(props){
  console.log(props);
  const classes = useStyles();
  return (
    <Card className={classes.card} raised>
      <CardActionArea>
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
        </CardActionArea>
      <CardActions>
        <Button
          size="large"
          color="primary"
          variant="outlined"
          onClick={() => handleShopNowClick(props.content.referral_link)}>
            SHOP NOW
        </Button>
      </CardActions>
    </Card>
  )
}


// <TextareaAutosize aria-label="Minimum height" rows={10}/>
