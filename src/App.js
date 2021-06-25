
import './App.css';
import Appbar from './component/navBar/index';
import Home from './component/cartWidget/index';
import ProductView from './component/productGrid/index';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Loger from './logo';
import { useState } from 'react';

function App() {
  const [homeVisible, setHomeVisible]=useState(true);
  const [sectionVisible, setSectionVisible]=useState(false);
  const [items, setItems] = useState([]);

  function handleClick(){
  fetch('https://mocki.io/v1/f62be81d-c98d-432e-8f87-b85ea1ddf212')
  .then((response) => response.json())
  .then(data => setItems(data))
  .then(console.log(items))

  setHomeVisible(false);
  setSectionVisible(true);
  }
  console.log(items);

  return (
    <div className="App">
      <header className="App-header">
       </header>
       <Appbar />
<div className="containerGral">
<div className="menu-container">
    <Paper className="pepito">
      <MenuList>
        <MenuItem onClick={handleClick}>
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
     {homeVisible && (
     <Home
        title={"Bienvenidos a CervezApp"} 
        parrafo={"Navega nuestro menu de exclusivas cervezas"} 
          />)
          }
               {
               sectionVisible && (
                 <ProductView 
               items={items}
               /> 

               )
              }
          </div>
    </div>
  );
}

export default App;
