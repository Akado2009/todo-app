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
import SnackWarning from './SnackWarning';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    textField: {
        width: 200,
    },
}));

const AddDialog = (props) => {

    const classes = useStyles();

    const [task, changeTask] = React.useState({
        name: "",
        description: "",
    });

    const handleChange = (field) => (event) => {
        let tmpTask = Object.assign({}, task);
        tmpTask[field] = event.target.value;
        changeTask(tmpTask);
    };

    const validate = (task) => {
        if (task.name === "") {
            return false;
        } else if (task.description === "") {
            return false;
        }
        return true;
    };

    const defaultSnack = {
        open: false,
        message: "empty",
        variant: "success",
        handleClose: () => {},
    };

    const [snack, handleSnack] = React.useState(defaultSnack);

    const handleClose = () => {
        handleSnack(defaultSnack);
    };


    const addTask = () => {
        if (!validate(task)) {
            handleSnack({
                open: true,
                message: "Check fields",
                variant: "error",
                handleClose: handleClose,
            }); 
        } else {
            const data = {
                name: task.name,
                description: task.description,
            };

            axios.post("http://127.0.0.1:8000/add", data)
                .then(response => {
                    changeTask({name: "", description: ""})
                    props.handleClose()
                })
                .catch(error => {
                    console.log(error)
                })
        }
    };

    

    return (
        <div className={classes.root}>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
            >
                <DialogTitle>
                    {"Add a task"}
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
                    <Button onClick={addTask} color={"primary"} autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <SnackWarning data={snack} />
        </div>
    );
};

export default AddDialog;