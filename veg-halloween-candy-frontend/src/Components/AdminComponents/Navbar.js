import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
    return(
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
               </IconButton>
               <Typography variant="h6" className={classes.title}>
               </Typography>
               <Button color="inherit" onClick={props.handleCreatePost} >New Post</Button>
               <Button color="inherit" onClick={props.logout} >Logout</Button>
            </Toolbar>
         </AppBar>
      </div>
    )
}