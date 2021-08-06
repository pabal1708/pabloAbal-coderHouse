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

    const [nitems, setnItems] = useState([]);
    const classes = useStyles();
    let { id } = useParams();
    const {addToCart, isAdded} = useCartContext();
    const addCart = (item, unity) => addToCart(item, unity);

    useEffect(() => {
    getProductsFilter(id);
    }, [id])
            const getProductsFilter = (id) => {
                db.collection('products')
                .where('name', '==', id)
                    .get()
                    .then(function (querySnapshot) {
                        const docs = [];
                        querySnapshot.forEach(function (doc) {
                            // doc.data() is never undefined for query doc snapshots
                            docs.push({ ...doc.data(), id: doc.id });
                            setnItems(docs);
                        });
                    });
                };
                

    return (
        <div>
        <div className="detailContainer">
            {nitems.map(element =>(
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
            {nitems.filter(element =>(element.name === id)).map(element =>(
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