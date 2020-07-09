/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CartButton(props) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(props.cart);
  }, [props.cart]);

  return (
    <div>
      <Link to="/shoppingcart">
        <button type="button" data-testid="shopping-cart-button">
          <FaShoppingCart size={32} />
        </button>
      </Link>
      <p data-testid="shopping-cart-size">{cart.reduce((acc, { qty }) => acc + qty, 0)}</p>
    </div>
  );
}
