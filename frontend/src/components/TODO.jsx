import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Header from './Header';
import Task from './Task';

import axios from 'axios';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        marginTop: 20,
    },
}));


const TODO = () => {

    const classes = useStyles();

    const [tasks, setTasks] = React.useState([]);
    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/tasks")
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    })
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
