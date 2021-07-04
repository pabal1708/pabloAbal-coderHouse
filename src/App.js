
import './App.css';
import Appbar from './component/navBar/index';
import ItemContainer from './component/ItemContainer/index';
import Detail from './component/itemDetail/index';
import Home from './component/home';
// REACT-ROUTER-DOM
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
<Router>
    <div className="App">
      <header className="App-header" />
        <Appbar />
          <Switch>
              <Route path='/' exact component={Home} /> 
              <Route path='/items/:section' component={ItemContainer} />
              <Route path='/details/:id' component={Detail} />
            </Switch>
    </div>
  </Router>
  );
}

export default App;
