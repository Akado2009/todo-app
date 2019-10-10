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
        status: 'done',
        description: 'Simple desc',
        id: 1,
    },
    {
        name: 'sadas',
        status: 'done',
        description: 'Simple desc',
        id: 2,
    },
    {
        name: 'sadas',
        status: 'not',
        description: 'Simple desc',
        id: 3,
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
