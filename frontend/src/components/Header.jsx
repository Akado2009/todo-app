import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position={"static"}>
                <Toolbar>
                    <Typography variant={"h6"} className={classes.title}>
                        TODO App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
