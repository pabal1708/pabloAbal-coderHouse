import React from 'react';
import Button from '@material-ui/core/Button';
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
    const { cart } = useCartContext();
    const [stockAgregado, setStockAgregado] = useState();
    const [alert, setAlert] = useState(false);


    useEffect(() => {
      stockViewer(cart, item);
      isAlert(stockAgregado, item);
    },[cart])
    
    function isAlert(stockAgregado, item) {
      if (stockAgregado === item.stock) {
        setAlert(true);
      }
      setTimeout(() => {
        setAlert(false);
      }, 10000);
    }

    function buy(item, unity){
      addCart(item, unity);
      setUnity(0);
    }

    function stockViewer(cart, item){
      cart.filter(element => (element.name === item.name)).map(x => (setStockAgregado(x.quantity)));
    }

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
            {alert && (
            <p className="alert">Has alcanzado el maximo de stock</p>
            )}
            <Button onClick={restarCantidad} variant="outlined" size="small" className={classes.margin}>
        -
        </Button>
        <Button onClick={() => sumarCantidad(item)} variant="outlined" size="small" className={classes.margin}>
        +
        </Button>
        <div>
        <Button onClick={() => buy(item, unity)} variant="outlined" size="small" className={classes.margin}>
        AGREGAR
        </Button>
        </div>
        </div>
        </div>
    );
}