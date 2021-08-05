import ProductGrid from '../ProductGrid/index';
import SideBar from '../SideBar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../../firebase';

const React = require('react');

export default function  HomeContainer (){
  const [ items, setItems] = useState([]);
  let { section } = useParams();
  console.log(items);
  console.log(section);
  useEffect(() => {
    getProductsFilter(section);
    },[]);

    const getProductsFilter = (section) => {
      db.collection('products')
      .where('tipo', '==', section)
          .get()
          .then(function (querySnapshot) {
              const docs = [];
              querySnapshot.forEach(function (doc) {
                  // doc.data() is never undefined for query doc snapshots
                  docs.push({ ...doc.data(), id: doc.id });
                  setItems(docs);
                  console.log(docs);
              });
          });
      };
    return (
      <div className="containerGral">
        <SideBar />
        {items.map(items =>(
        <ProductGrid items={items} /> 
        ))}
      </div>
    )
};
