import React from 'react';
import {
    Button,
    Dialog,
    TextField,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    textField: {
        width: 200,
    },
}));

const UpdateDialog = (props) => {

    const classes = useStyles();

    const [task, changeTask] = React.useState(props.task);

    const handleChange = (field) => (event) => {
        let tmpTask = Object.assign({}, task);
        tmpTask[field] = event.target.value;
        changeTask(tmpTask);
    };

    return (
        <div className={classes.root}>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
            >
                <DialogTitle>
                    {"Editting"}
                </DialogTitle>
                <DialogContent> 
                    <TextField
                        className={classes.textField}
                        label={"Name"}
                        onChange={handleChange("name")}
                        value={task.name}
                    />
                    <br />
                    <TextField
                        className={classes.textField}
                        label={"Description"}
                        onChange={handleChange("description")}
                        value={task.description}
                        multiline
                        rows={"4"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color={"primary"}>
                        Cancel
                    </Button>
                    <Button onClick={props.handleClose} color={"primary"} autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UpdateDialog;