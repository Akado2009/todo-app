import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Header from './Header';
import Task from './Task';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        marginTop: 20,
    },
}));

const tasks = [
    {
        name: 'sadas',
        until: 'ss',
        status: 'done',
        description: '',
    },
    {
        name: 'sadas',
        until: 'ss',
        status: 'done',
        description: '',
    },
    {
        name: 'sadas',
        until: 'ss',
        status: 'not',
        description: '',
    },
];

const TODO = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Grid container spacing={5} className={classes.grid}>
                {
                    tasks.map((task, i) => {
                        return (
                            <Grid item xs={6} key={i}>
                                <Task task={task} />
                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
};

export default TODO;
