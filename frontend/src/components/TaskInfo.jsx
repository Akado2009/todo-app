import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

const TaskInfo = (props) => {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <h1>shit</h1>
        </div>
    );
};

export default TaskInfo;
