import ProductGrid from '../ProductGrids/index';
import SideBar from '../SideBars';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const React = require('react');

export default function  HomeContainer (){
  const [ items, setItems] = useState([]);
  let { section } = useParams();

  useEffect(() => {
    fetch('https://mocki.io/v1/f1a81799-29c2-4451-9978-67463d4f47bb')
    .then((response) => response.json())
    .then(data => setItems(data))
    },[]);

    return (
      <div className="containerGral">
        <SideBar />
        {items.filter(element => (element.tipo === section)).map(items =>(
        <ProductGrid items={items} /> 
        ))}
      </div>
    )
};
