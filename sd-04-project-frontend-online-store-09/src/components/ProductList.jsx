import React, { Component } from 'react';
import InfoControl from './InfoControl';
import { ProductCard } from './ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  render() {
    const { addItemToCart, selectedCategory } = this.props;
    const { products } = this.state;
    return (
      <div>
        <InfoControl selectedCategory={selectedCategory} items={(item) => this.setState(item)} />
        {(products.map((product) => (
          <ProductCard
            data-testid="product"
            product={product}
            addItemToCart={addItemToCart}
            key={product.id}
          />
        )))}
      </div>
    );
  }
}

export default ProductList;
