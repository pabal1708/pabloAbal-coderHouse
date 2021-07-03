
import './App.css';
import Appbar from './component/navBar/index';
import Home from './component/homeContainer/index';
import Detail from './component/itemDetail/index';
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
              <Route path='/details/:id' component={Detail} />
            </Switch>
    </div>
  </Router>
  );
}

export default App;
