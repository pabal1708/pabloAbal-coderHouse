/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useEffect, useState } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Loger from '../../logo';
import { Link } from 'react-router-dom';

function index() {
    const [sections, setSections] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      //Trae las secciones del mock, para luego iterarlas en componente sidebar, tambien trae el valor seccion.
      fetch('https://mocki.io/v1/964f14eb-da03-4e39-af32-1e090fea1b18')
      .then((response) => response.json())
      .then(data => setSections(data))
      },[]);

  return (
    <div className="menu-container">
        <Paper className="paper">
          <MenuList>
            {sections.map(element => (
            <MenuItem >
            
              <ListItemIcon>
              <Loger className="icon"/>
              </ListItemIcon>
              <Link className="link" to={`/items/${element.tipo}`}>
              <Typography variant="inherit">{element.name}
              </Typography>
              </Link>
            </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </div>
  )
}

export default index
