import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
    Paper,
    Typography,
    IconButton
} from '@material-ui/core';

import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';

import { pink, green } from '@material-ui/core/colors';
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
    doneIcon: {
        color: green[500],
        height: 30,
        width: 30,
    },
    blockIcon: {
        color: pink[500],
        height: 30,
        width: 30,
    },
}));

const Task = (props) => {

    const classes = useStyles();
    const { task } = props;

    const [expanded, setExpand] = React.useState(false);

    return (
        <div>
            <Paper className={classes.paper}>
                <Typography variant={"h5"}>
                    {
                        !expanded ? 
                        <IconButton onClick={() => setExpand(true)}>
                            <ExpandMore
                                className={classes.icon}
                                />
                        </IconButton>
                        :
                        <IconButton onClick={() => setExpand(false)}>
                            <ExpandLess
                                className={classes.icon}
                                />
                        </IconButton>
                    }
                    {task.Name}
                    <div className={classes.status}>
                        {
                            task.Status === 'done' ?
                            <DoneIcon className={classes.doneIcon} />
                            :
                            <BlockIcon className={classes.blockIcon} />
                        }
                    </div>
                </Typography>
                {
                    expanded && <TaskInfo task={task} />
                }
            </Paper>
        </div>
    );
};

export default Task;
