import ProductGrid from '../ProductGrid/index';
import SideBar from '../SideBar';
const React = require('react');

export default function  HomeContainer (){
    return (
      <div className="containerGral">
        <SideBar />
            <ProductGrid 
            /> 
      </div>
    )
};
