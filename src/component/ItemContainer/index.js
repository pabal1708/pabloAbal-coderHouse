import ProductGrid from '../ProductGrid/index';
import SideBar from '../SideBar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../../firebase';

const React = require('react');

export default function  HomeContainer (){
  const [ items, setItems] = useState([]);
  let { section } = useParams();
  
  useEffect(() => {
    const products = [];
    db.collection('products').onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc)=>{
      products.push({ ...doc.data() });
    })
    })
    setItems(products);
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
