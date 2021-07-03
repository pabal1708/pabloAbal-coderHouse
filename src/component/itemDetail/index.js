import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from '../productGrid/cervicha.jpg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';


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

    const classes = useStyles();
    let { id } = useParams();
    console.log(id);
    console.log('pepe');
    
    useEffect((id) => {
        fetch('https://mocki.io/v1/03b9d11b-8526-4000-a75d-0006b385371c')
    .then((response) => response.json())
    .then(data => setItems(data))
    }, [])

    return (
        <div>
        <div className="detailContainer">
            {items.filter(element =>(element.name === id)).map(element =>(
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
        </Card> ))}
        </div>
        <div>
        <Link className='Link' to='/'>
        <Button variant="contained" color="primary">
            VOLVER
            </Button>
            </Link>
        </div>
        </div>
    );
}