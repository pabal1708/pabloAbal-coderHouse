import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { useCartContext } from '../../context/Context';

    const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
    }));

    export default function Checkout({ addProduct }) {
    const classes = useStyles();
    const{ clearCart } = useCartContext();

        const initialState = {
            name: '',
            adress: '',
            adress_detail: '',
            dni: '',
            tel: '',
        };
    
        const [values, setValues] = useState(initialState);
    
        const handleOnChange = (e) => {
            const { name, value } = e.target;
            console.log(name, value);
            // Copiamos los valores actuales, y el input [name] que estemos actualizando, le colocamos el valor actual que estemos tipeando
            setValues({ ...values, [name]: value });
        };
    
        const handleOnSubmit = (e) => {
            e.preventDefault();
            console.log(values);
            addProduct(values); // Envia al componente Products los valores de los values
            setValues({ ...initialState }); // Resetear campos de formulario
            clearCart();
        };
    

    return (
        <div>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Nombre y Apellido" variant="outlined" onChange={handleOnChange} name='name' value={values.name}/>
        <TextField id="outlined-basic" label="Direccion" variant="outlined" onChange={handleOnChange} name='adress' value={values.adress}/>
        <TextField id="outlined-basic" label="Entre calles" variant="outlined" onChange={handleOnChange} name='adress_detail' value={values.adress_detail}/>
        <TextField id="outlined-basic" label="Numero de Documento" variant="outlined" onChange={handleOnChange} name='dni' value={values.dni}/>
        <TextField id="outlined-basic" label="Telefono" variant="outlined" onChange={handleOnChange} name='tel' value={values.tel}/>
        </form>
                <Button variant="contained" color="primary" onClick={handleOnSubmit}>
                Comprar
            </Button>
        </div>
    );
}