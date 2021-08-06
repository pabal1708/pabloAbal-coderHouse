import React, { useState, useEffect } from 'react';
import Checkout from '../Checkout/index';

import { db } from '../../firebase';

// Styles
const styles = {
	cardStyles: {
		backgroundColor: 'green',
		padding: 20,
		margin: 10,
		borderRadius: 8,
		boder: '1px solid black',
	},
};

const SuccesOrder = () => {
	const [order, setOrder] = useState([]);
    const [userId, setUserId] = useState("0");
	const orderTrue = order > "0";

	 console.log('Mi Estado', order, userId);

	const addProduct = async (object) => {
		// console.log('Product', object);
        setUserId(object.dni);
		await db.collection('pedidos').doc().set(object);
		console.log('Pedido agregado!');
	};


    const getProductWhere = (userId) => {
    db.collection('pedidos')
        .where('dni', '==', userId)
        .get()
        .then(function (querySnapshot) {
            const docs = [];
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                docs.push({ ...doc.data(), id: doc.id });
                setOrder(docs);
            });
        });
    };

	// Al poner el array vacio se va a ejecutar la primera vez que cargue el componente
	useEffect(() => {
        getProductWhere(userId);
	}, [userId]);

	return (
		<div>
			<h1>Pedido</h1>
			<Checkout addProduct={ addProduct } />
            {orderTrue && (<p>Tienes los siguientes pedidos: </p> )}
            {order.map(order => (
				<div key={order.id} style={styles.cardStyles}>
                    <p>{order.id}</p>
				</div>
                ))}
		</div>
	);
};

export default SuccesOrder;