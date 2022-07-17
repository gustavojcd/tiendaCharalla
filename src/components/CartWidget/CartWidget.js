import './CartWidget.css';
import React from 'react';
import { BsCart3 } from 'react-icons/bs';

function CartWidget (){
    return(
        <div className='icono'>
            <BsCart3 size={30}/>
            10
        </div>
    )
}

export default CartWidget;