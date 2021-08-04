import React from 'react';
import Button from '@material-ui/core/Button';
import Alert from '../SnackBar/index';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react'; 
import { useCartContext } from '../../context/Context';


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
  
export default function  Counter ({ item, addCart }) {
    const classes = useStyles();
    const [unity, setUnity] = useState(0);
    const { error } = useCartContext();

    console.log(error);
 

    function sumarCantidad(item){
        if (item.stock > unity) {
            setUnity(unity + 1) 
        }
    }

    function restarCantidad(){
        if (unity > 0) {
            setUnity(unity - 1) 
        }
    }

    return ( 
      <div>
        <div>
            <p>Unidades: {unity} Stock: {item.stock}</p>
            <Button onClick={restarCantidad} variant="outlined" size="small" className={classes.margin}>
        -
        </Button>
        <Button onClick={() => sumarCantidad(item)} variant="outlined" size="small" className={classes.margin}>
        +
        </Button>
        <div>
        <Button onClick={() => addCart(item, unity)} variant="outlined" size="small" className={classes.margin}>
        AGREGAR
        </Button>
        </div>
        </div>
        </div>
    );
}