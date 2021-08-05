import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useCartContext } from '../../context/Context';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
table: {
minWidth: 650,
},
});


export default function CartList() {
const {cart, clearCart, removeToCart, totalValor, totalArticulos}= useCartContext();
const classes = useStyles();

return (
<div>
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell>Detalle del producto</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right"></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {cart.map(element=>(
            <TableRow key="pepe">
                <TableCell component="th" scope="row">
                {element.name}
                </TableCell>
                <TableCell align="right">{element.quantity}</TableCell>
                <TableCell align="right">$ {element.valor}</TableCell>
                <TableCell align="right">
                    <Button onClick={() => removeToCart(element)}>borrar</Button>
                </TableCell>
            </TableRow>))}
            <TableRow key="pepe">
            <TableCell component="th" scope="row">
                Valor Total
                </TableCell>
                <TableCell align="right">{totalArticulos}</TableCell>
                <TableCell align="right">$ {totalValor}</TableCell>
            </TableRow>
        </TableBody>
        </Table>
    </TableContainer>
    <div className="button-box">
    <Link className='Link' to={{ pathname: `/`,}}>
        <Button variant="contained" color="primary" >
            VOLVER
            </Button>
        </Link>
        <Button variant="contained" color="primary" onClick={clearCart}>
            VACIAR CHANGO
            </Button>
            <div>
            <Link className='Link' to={{ pathname: `/checkout`,}}>
        <Button variant="contained" color="primary" >
            Ir al checkout
            </Button>
        </Link>
        </div>
            </div>
</div>
);
}
