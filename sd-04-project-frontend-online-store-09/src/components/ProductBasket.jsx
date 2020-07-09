import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductBasket extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: props.qtd };
    console.log(this.props);
    this.addOneItem = this.addOneItem.bind(this);
    this.subtractOneItem = this.subtractOneItem.bind(this);
  }

  addOneItem() {
    const { addItemToCart, itemID, availableQuantity } = this.props;
    const { quantity: qtd } = this.state;
    if (qtd < availableQuantity) {
      console.log(qtd);
      this.setState({ quantity: qtd + 1 });
      addItemToCart({ id: itemID }, 1);
    }
  }

  subtractOneItem() {
    const { quantity } = this.state;
    const { addItemToCart, itemID } = this.props;
    if (quantity > 0) {
      this.setState({ quantity: quantity - 1 });
      addItemToCart({ id: itemID }, -1);
    }
  }

  render() {
    const { title, price, thumbnail } = this.props;
    const { quantity } = this.state;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        {console.log(quantity)}
        <button type="button" data-testid="product-increase-quantity" onClick={this.addOneItem}>
          +1
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={this.subtractOneItem}
        >
          -1
        </button>
        <img alt={title} src={thumbnail} />
        <Link to="/">
          <button type="button">VOLTAR</button>
        </Link>
        <Link to="/checkout">
          <button type="button" data-testid="checkout-products">
            Finalizar Compras
          </button>
        </Link>
      </div>
    );
  }
}

export default ProductBasket;
