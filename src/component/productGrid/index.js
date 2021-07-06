import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import img from '../../asset/botella.jpg';
import Counter from '../Counter';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 10,
    maxWidth: 500,
  },
  image: {
    width: 110,
    height: 110,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {

  const [ items, setItems] = useState([]);
  let { section } = useParams();



  useEffect(() => {
    fetch('https://mocki.io/v1/f1a81799-29c2-4451-9978-67463d4f47bb')
    .then((response) => response.json())
    .then(data => setItems(data))
    },[]);

  const classes = useStyles();
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    items.filter(element => (element.tipo === section)).map(items =>(
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item><Link  className='Link' to={`/details/${items.name}`}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={img} />
            </ButtonBase>
            </Link>
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
        <Counter 
        stock={items.stock}
        />
      </Paper>
    </div>
    ))
  );
}
