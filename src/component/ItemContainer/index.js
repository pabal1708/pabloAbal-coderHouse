

import ProductGrid from '../productGrid/index';
import SideBar from '../sideBar';
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
