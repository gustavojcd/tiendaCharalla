import React from 'react'
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({ saludo }) {
    const manageOnAdd = (amount,stock) => {
        if (amount <= stock) {
            console.log("cantidad de productos en tu carrito de compra: ", amount);
        } else {
            console.log("sin stock");
        }
    }
    return (
        <>
            <h1>{saludo}</h1>
            <ItemCount stock={5} initial={1} onAdd={manageOnAdd} />
        </>
    )
}

export default ItemListContainer