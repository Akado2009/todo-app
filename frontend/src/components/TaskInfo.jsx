import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Typography
} from '@material-ui/core';

import DoneDialog from './DoneDialog';
import UpdateDialog from './UpdateDialog';
import DeleteDialog from './DeleteDialog';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    button: {
        margin: 10,
    },
}));

const TaskInfo = (props) => {

    const classes = useStyles();
    
    const { task } = props;

    const [del, handleDelete] = React.useState(false);
    const [done, handleDone] = React.useState(false);
    const [update, handleUpdate] = React.useState(false);

    return (
        <div className={classes.root}>
            <Typography
                variant={"body1"}
            >
                {task.Description}
            </Typography>
            <Button
                variant={"contained"}
                className={classes.button}
                color={"primary"}
                onClick={() => handleDone(true)}
            >
                Mark as done
            </Button>
            <Button
                variant={"contained"}
                className={classes.button}
                color={"primary"}
                onClick={() => handleUpdate(true)}
            >
                Update
            </Button>
            <Button
                variant={"contained"}
                className={classes.button}
                color={"secondary"}
                onClick={() => handleDelete(true)}
            >
                Delete
            </Button>
            <DoneDialog
                open={done}
                handleClose={() => handleDone(false)}
                id={task.ID}
            />
            <UpdateDialog
                open={update}
                handleClose={() => handleUpdate(false)}
                task={task}
            />
            <DeleteDialog
                open={del}
                handleClose={() => handleDelete(false)}
                id={task.ID}
            />
        </div>
    );
};

export default TaskInfo;
