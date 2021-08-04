import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LogoCervezApp from '../../asset/Cervezapp.png';
import CartHeader from '../CartHeader';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
root: {
flexGrow: 1,
},
menuButton: {
marginRight: theme.spacing(2),
},
title: {
flexGrow: 1,
},
}));

export default function ButtonAppBar() {
const classes = useStyles();

return (
<div className={classes.root}>
    <AppBar position="static">
    <Toolbar>
    <Link className="logocerve" to={{pathname: `/`}}>
        <img className="logocerve" alt="complex" src={LogoCervezApp} />
    </Link>
    <CartHeader />
    </Toolbar>
    </AppBar>
</div>
);
}