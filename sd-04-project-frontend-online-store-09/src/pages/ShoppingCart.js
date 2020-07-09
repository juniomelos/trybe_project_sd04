import React, { Component } from 'react';
import ProductBasket from '../components/ProductBasket';

function emptyCart() {
  return (
    <div>
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    </div>
  );
}
class ShoppingCart extends Component {
  render() {
    const { shoppingCart, addItemToCart } = this.props;
    if (shoppingCart.length === 0) return emptyCart();

    return (
      <div>
        <p>Carrinho de Compras</p>
        {shoppingCart.map(
          ({ item: { id, title, thumbnail, price, availableQuantity }, qty: qtd }) => (
            <ProductBasket
              key={title}
              title={title}
              thumbnail={thumbnail}
              price={price}
              qtd={qtd}
              availableQuantity={availableQuantity}
              addItemToCart={addItemToCart}
              itemID={id}
            />
          ),
          // <Link to={{ pathname: 'checkout', state: { shoppingCart } }}>
          //   <button type="button" data-testid="checkout-products">
          //     CheckOut
          //   </button>
          // </Link>,
        )}
      </div>
    );
  }
}

export default ShoppingCart;
