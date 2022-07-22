import './ItemCount.css';
import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
    const [amount, setAmount] = useState(initial);
    const suma = () => {
        if (amount < stock) {
            setAmount(amount + 1)
        }
    }
    const resta = () => {
        if (amount > initial) {
            setAmount(amount - 1)
        }
    }

    return (
        <div className='container-itemCount'>
            <div>
                <button onClick={resta}>-</button>
                <input type='text' size='6' onChange={e => (e.target.value)} value={amount} />
                <button onClick={suma}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(amount, stock)}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;