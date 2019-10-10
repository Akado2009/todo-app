import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AddDialog from './AddDialog';
import {
    Button,
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
    
    const [addOpen, handleAddOpen] = React.useState(false);

    return (
        <div className={classes.root}>
            <AppBar position={"static"}>
                <Toolbar>
                    <Typography variant={"h6"} className={classes.title}>
                        TODO App
                    </Typography>
                    <Button
                        onClick={() => handleAddOpen(true)}
                        color={"inherit"}
                    >
                        Add
                    </Button>
                </Toolbar>
            </AppBar>
            <AddDialog open={addOpen} handleClose={() => handleAddOpen(false)} />
        </div>
    );
};

export default Header;
