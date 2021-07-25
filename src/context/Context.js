import React, { createContext, useState, useContext } from 'react';


// 1 - CREAR EL CONTEXTO
export const ItemsContext = createContext();
// Exporto el contexto a una funcion
export const useCartContext = () => useContext(ItemsContext);

// crear provider y pasar objeto children
export const ItemsProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isAdded, setIsadded] = useState(false);
    const [database] = useState([]);

    const clearCart = () => setCart([]);

    const isInCart = name => cart.some(item => item.name === name);

    const addToCart = (item, quantity) => {
        if (isInCart(item.name)){
            const newCart = cart.map(cartElement => {
                if (cartElement.id === item.id) {
                return { ...cartElement, quantity: (cartElement.quantity + quantity) > cartElement.stock ? cartElement.stock : cartElement.quantity + quantity }
                } else return cartElement;
            })
            setCart(newCart);
            setIsadded(true);
            } else {
        setCart(prev => [...prev, { ...item, quantity }]);
        setIsadded(true);
        }
    };
    const removeToCart = (item) => {
        const cartRemove = [...cart];
        const itemToRemove = (cartRemove.findIndex(x => x.name === item.name));
        cartRemove.splice(itemToRemove);
        setCart(cartRemove);
            };
        const cantidadCart = cart.map(element =>(element.quantity));
        const totalArticulos = cantidadCart.reduce((prev, next) => prev + next,0);
        const precioCart = cart.map(element =>(element.valor * element.quantity)); 
        const totalValor = precioCart.reduce((prev, next) => prev + next,0);

      // retornar componente de contexto junto con props
    return <ItemsContext.Provider value={{ cart, setCart, clearCart, addToCart, database, isAdded, removeToCart, totalArticulos, totalValor }}>
        {children}
    </ItemsContext.Provider>
    }

    