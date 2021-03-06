import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import img from '../../asset/botella.jpg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Counter from '../Counter/index';
import { useCartContext } from '../../context/Context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 10,
    maxWidth: 300,
  },
  image: {
    width: 60,
    height: 110,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '75%',
    maxHeight: '75%',
  },
}));

export default function ProductGrid({ items }) {
  const classes = useStyles();
  const {addToCart, isAdded} = useCartContext();
  const addCart = (item, unity) => addToCart(item, unity);
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
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
              <Typography><h3>$ {items.valor}</h3></Typography>
            </Grid>
          </Grid>
        </Grid>
          <Counter 
          item={items}
          addCart={addCart}
          />
          <div className="button-card">
        <Link className='Link' to={{ pathname: `/details/${items.name}`}}>
          <Button className='button-card' variant="contained" color="primary" >
              Detalle
            </Button>
        </Link>
        </div>
      </Paper>
    </div>
  );
}
