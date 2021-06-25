import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import img from '../productGrid/botella.jpg';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid({items}) {
  const classes = useStyles();
  const [unity, setUnity] = useState(0);

  function sumarCantidad(){
    setUnity(unity + 1) 
  }
  function restarCantidad(){
    setUnity(unity - 1) 
  }

  return (
    items.map(items =>(
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                
                <Typography variant="body2" gutterBottom>
                  <h3>{items.name}</h3>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{items.valor}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
              <Typography variant="subtitle1">Cantidad {unity}</Typography>
              <Button onClick={restarCantidad} variant="outlined" size="small" className={classes.margin}>
          -
        </Button>
        <Button onClick={sumarCantidad} variant="outlined" size="small" className={classes.margin}>
          +
        </Button>
            </Grid>
      </Paper>
    </div>
    ))
  );
}
