import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

export default function ConfirmationModal(props){
  return (
    <Dialog open={props.isOpen} aria-labelledby="confirmation pop up">
      <DialogTitle id="simple-dialog-title">Discard?</DialogTitle>
        <Button
          label="Yes"
          variant="contained"
          onClick={() => props.cancelPost(true)}
        >
        YES
        </Button>
        <Button
          label="No"
          variant="contained"
          onClick={() => props.cancelPost(false)}
        >
        NO
        </Button>
    </Dialog>
  )
};
