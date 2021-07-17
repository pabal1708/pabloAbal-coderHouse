import React, { createContext, useState, useContext, useEffect } from 'react';
import { db } from '../firebase';

// 1 - CREAR EL CONTEXTO
export const ItemsContext = createContext();

export const useCartContext = () => useContext(ItemsContext);

// crear provider y pasar objeto children
export const ItemsProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isAdded, setIsadded] = useState(false);
    const [database] = useState([]);
    const [newsections, setNewsections] = useState([]);

    const clearCart = () => setCart([]);

    const isInCart = name => cart.some(item => item.name === name);

    const addToCart = (item, quantity) => {
        if (isInCart(item.name)){
            const newCart = cart.map(cartElement => {
                if (cartElement.id === item.id) {
                return { ...cartElement, quantity: cartElement.quantity + quantity }
                } else return cartElement;
            })
            setCart(newCart);
            setIsadded(true);
            } else {
        setCart(prev => [...prev, { ...item, quantity }]);
        setIsadded(true);
        }
    };
    const getFirebase = () => {
        const sectionsFirebase = [];
        db.collection('sections').onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc)=>{
            sectionsFirebase.push({ ...doc.data() });
        })
        })
        setNewsections(sectionsFirebase);
    }
        useEffect(() => {
            getFirebase();
        },[])
      // retornar componente de contexto junto con props
    return <ItemsContext.Provider value={{ cart, setCart, clearCart, addToCart, database, isAdded, newsections }}>
        {children}
    </ItemsContext.Provider>
    }

    