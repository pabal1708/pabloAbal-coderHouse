import Home from '../cartWidget/index';
const React = require('react');
const ProductView = require('../productGrid/index');



export default function  HomeContainer (HomeVisible, ProductVisible) {
    return (
<div className= "gralContainer">
  {{HomeVisible} && ( 
       <Home 
        title={"Bienvenidos a CervezApp"} 
        parrafo={"Navega nuestro menu de exclusivas cervezas"} /> 
  )}
<ProductView />
</div>
    )
};
