import Home from '../cartWidget/index';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Loger from '../../logo';
import { useState, useEffect } from 'react';
import ProductGrid from '../productGrid/index';
const React = require('react');



export default function  HomeContainer (HomeVisible, ProductVisible) {
  const [homeVisible, setHomeVisible]=useState(true);
  const [sectionVisible, setSectionVisible]=useState(false);
  const [ items, setItems] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    //Trae las secciones del mock, para luego iterarlas en componente sidebar, tambien trae el valor seccion.
    fetch('https://mocki.io/v1/964f14eb-da03-4e39-af32-1e090fea1b18')
    .then((response) => response.json())
    .then(data => setSections(data))
    },[]);

    function handleClick(section){
      //fetch para traer info de los items, filtrada segun seccion
    fetch('https://mocki.io/v1/f1a81799-29c2-4451-9978-67463d4f47bb')
    .then((response) => response.json())
    .then(data => setItems(data.filter(element => element.tipo === section)))
  //muestro la seccion, oculto Home  y seteo identificador de seccion, por ahora solo funciona en rubia y stout
    setHomeVisible(false);
    setSectionVisible(true);
    }
    console.log(items);
    return (
      
      
<div className="containerGral">
<div className="menu-container">
    <Paper className="pepito">
      <MenuList>
        {sections.map(element => (
        <MenuItem onClick={() => handleClick(element.tipo)}>
          <ListItemIcon>
          <Loger className="icon"/>
          </ListItemIcon>
          <Typography variant="inherit">{element.name}</Typography>
        </MenuItem>
        ))}
      </MenuList>
    </Paper>
  </div>
    {homeVisible && (
    <Home
      title={"Bienvenidos a CervezApp"} 
      parrafo={"Navega nuestro menu de exclusivas cervezas"} 
        />)}
        {sectionVisible && (
          <ProductGrid 
            items={items}
          /> 
          )
          }
          </div>
    )
};
