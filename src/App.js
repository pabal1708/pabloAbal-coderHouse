
import './App.css';
import Menu from './component/menu/index';
import Appbar from './component/navBar/index';
import Greeting from './component/cartWidget/index';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       </header>
       <Appbar />
<div className="containerGral">
        <Menu
        />
       <Greeting
            title={"Bienvenidos a CervezApp"} 
            parrafo={"Navega nuestro menu de exclusivas cervezas"}
                />
       </div>
    </div>
  );
}

export default App;
