import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
    Paper,
    Typography,
    IconButton
} from '@material-ui/core';

import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';

import TaskInfo from './TaskInfo';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3, 2),
    },
    status: {
        float: 'right',
    },
    icon: {
        color: theme.palette.secondary.main,
        height: 30,
        width: 30,
    },
}));

const Task = (props) => {

    const classes = useStyles();
    const { task } = props;

    const [expand, setExpand] = React.useState(false);

    return (
        <div>
            <Paper className={classes.paper}>
                <Typography variant={"h5"}>
                    {
                        expand ? 
                        <IconButton onClick={() => setExpand(false)}>
                            <ExpandMore
                                className={classes.icon}
                                />
                        </IconButton>
                        :
                        <IconButton onClick={() => setExpand(true)}>
                            <ExpandLess
                                className={classes.icon}
                                />
                        </IconButton>
                    }
                    {task.name}
                    <div className={classes.status}>
                        {
                            task.status === 'done' ?
                            <DoneIcon className={classes.icon} />
                            :
                            <BlockIcon className={classes.icon} />
                        }
                    </div>
                </Typography>
                {
                    expand && <TaskInfo task={task} />
                }
            </Paper>
        </div>
    );
};

export default Task;
