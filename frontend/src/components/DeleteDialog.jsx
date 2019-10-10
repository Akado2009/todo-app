import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

const DeleteDialog = (props) => {

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
            >
                <DialogTitle>
                    {"Are you sure you want to delete this task?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You can not undone this action.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color={"primary"}>
                        Disagree
                    </Button>
                    <Button onClick={props.handleClose} color={"primary"} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteDialog;