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

const useStyles = makeStyles({
  card: {maxWidth: "100%"}
});

export default function CreatePostCard(){
  const classes = useStyles();
  return (
    <Card className={classes.card} raised>
      <CardActionArea>
        <CardMedia/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Zots!
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              They're really great I love them so much. They fizzle and pop so delightfully its insane. 10/10 would reccomend.
            </Typography>
          </CardContent>
        </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
        BUY
        </Button>
      </CardActions>
    </Card>
  )
}

// <CardMedia
// component="img"
// alt="desc"
// height="140"
// image="/static/images/blahblahblah"
// src="www.ggogle.com/zots"
// title="title"
// />
// <TextareaAutosize aria-label="Minimum height" rows={10}/>
