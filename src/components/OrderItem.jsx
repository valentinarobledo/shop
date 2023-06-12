import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import AppContext from '../context/AppContext';

import closeIcon from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
    const {removerFromCart } = useContext(AppContext);

    const handelRemove = product => {
        removerFromCart(product);
    }
  return (
      <div class="OrderItem">
          <figure>
              <img src={product.images[0]} alt={product.title} />
          </figure>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <img src={closeIcon} alt="close" onClick={() => handelRemove(product)}/>
      </div>
  )
}

export default OrderItem