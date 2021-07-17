/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Loger from '../../logo';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/Context';

function SideBar() {
    const {newsections} = useCartContext(); 
    console.log(newsections);
  return (
    <div className="menu-container">
        <Paper className="paper">
          <MenuList>
            {newsections.map(element => (
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

export default SideBar
