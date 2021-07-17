import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from '../../asset/cervicha.jpg';
import Counter from '../Counter';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useCartContext } from '../../context/Context';
import { db } from '../../firebase';


const useStyles = makeStyles({
        root: {
        maxWidth: 345,
        },
        media: {
            height: 160,
        },
        });

export default function ItemDetail() {

    const [items, setItems] = useState([]);
    const [nitems, setnItems] = useState([]);
    const classes = useStyles();
    let { id } = useParams();
    const {addToCart} = useCartContext();
    const addCart = (item, unity) => addToCart(item, unity);
    const {isAdded}= useCartContext();

    console.log(items);
    console.log(nitems);

    useEffect(() => {
        fetch('https://mocki.io/v1/03b9d11b-8526-4000-a75d-0006b385371c')
    .then((response) => response.json())
    .then(data => setItems(data))
    getProducts();
    }, [])

    const getProducts = () => {
        const productsFirebase = [];
        db.collection('products').onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc)=>{
            productsFirebase.push({ ...doc.data() });
          })
          })
          setnItems(productsFirebase);
          };
            

    return (
        <div>
        <div className="detailContainer">
            {nitems.filter(element =>(element.name === id)).map(element =>(
        <Card className={classes.root}>
            <CardMedia
            className={classes.media}
            image={Logo}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {element.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {element.descripcion}
            </Typography>
            </CardContent>
        <CardActions>
        </CardActions>
        <Counter 
        item={element}
        addCart={addCart}
        />
        </Card> ))}
        </div>
        <div className="backButton">
            {items.filter(element =>(element.name === id)).map(element =>(
            <Link className='Link' to={{ pathname: `/items/${element.tipo}`,
            }}>
            <Button variant="contained" color="primary" >
                VOLVER
                </Button>
                </Link>
            ))}
        </div>
            {isAdded &&( <div className="buyButton">
                <Link className='Link' to={{ pathname: `/cart/`,
                }}>
                <Button variant="contained" color="primary" >
                    FINALIZAR COMPRA
                    </Button>
                    </Link>
            </div> )}
        </div>
    );
}