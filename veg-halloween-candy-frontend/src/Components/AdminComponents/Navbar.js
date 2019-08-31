import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Add';

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
      <div className={classes.root} style={{"color":"#FF8C00"}} id={"navbar-container"}>
         <AppBar position="static" color="inherit">
            <Toolbar>
                 <Button
                   edge="start"
                   className={classes.menuButton}
                   color="inherit"
                   aria-label="draft new post"
                   size="medium"
                   onClick={props.handleCreatePost}
                 >
                    <AddIcon /> New Post
                 </Button>
                 <Button
                   edge="start"
                   className={classes.menuButton}
                   color="inherit"
                   aria-label="view drafts"
                   size="medium"
                   onClick={props.handleDraftClick}
                 >
                  Drafts
                 </Button>
               <Typography variant="h6" className={classes.title}>
               </Typography>
               <Button color="inherit" onClick={props.logout} >Logout</Button>
            </Toolbar>
         </AppBar>
      </div>
    )
}
