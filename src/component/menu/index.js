import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Loger from '../navBar/logo';


const useStyles = makeStyles({
  root: {
    width: 230,
  },
});
function menu() {

  return (
    <div className="menu-container">
    <Paper className="pepito">
      <MenuList>
        <MenuItem>
          <ListItemIcon>
          <Loger className="icon"/>
          </ListItemIcon>
          <Typography variant="inherit">Cervezas rubias</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <Loger className="icon"/>
          </ListItemIcon>
          <Typography variant="inherit">Cervezas Stout</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <Loger className="icon"/>
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Cervezas Rojas
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <Loger className="icon"/>
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Cervezas Importadas
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  </div>
  );
}

export default menu;
