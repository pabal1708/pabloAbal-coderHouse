
import './App.css';
import Appbar from './component/NavBar/index';
import ItemContainer from './component/ItemContainer/index';
import Detail from './component/ItemsDetail/index';
import Home from './component/Home';
import CartList from './component/CartList/index';
import Checkout from './component/SuccessOrder/index';

// REACT-ROUTER-DOM
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ItemsProvider } from './context/Context';


function App() {

return (
  <ItemsProvider>
    <Router>
          <div className="App">
            <header className="App-header" />
              <Appbar />
                <Switch>
                    <Route path='/' exact component={Home} /> 
                    <Route path='/items/:section' component={ItemContainer} />
                    <Route path='/details/:id' component={Detail} />
                    <Route path='/cart/' component={CartList} />
                    <Route path='/checkout/' component={Checkout} />
                  </Switch>
          </div>
      </Router>
  </ItemsProvider>
  );
}

export default App;
