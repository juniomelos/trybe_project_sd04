import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

function buttonDetails(id) {
  return (
    <button type="button">
      <Link data-testid="product-detail-link" to={{ pathname: `/${id}/details` }}>
        VER DATALHES
      </Link>
    </button>
  );
}

function buttonCart() {
  return (
    <button type="button">
      <Link data-testid="shopping-cart-button" to="/shoppingcart">
        Ir para o Carrinho
      </Link>
    </button>
  );
}
class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showProducts: false,
    };
  }

  componentDidMount() {
    const { category, item } = this.props;
    api.getProductsFromCategoryAndQuery(category, item).then((data) => {
      this.setState({
        products: data.results,
        showProducts: true,
      });
    });
  }

  render() {
    const { products, showProducts } = this.state;
    if (products.length === 0 && showProducts === true) {
      return <p>Nenhum produto foi encontrado</p>;
    }

    return (
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} data-testid="product">
            <p>{product.title}</p>
            <img src={product.thumbnail} alt={product.title} />
            <p>
              R$
              {product.price.toFixed(2)}
            </p>
            {buttonDetails(product.id)}
            {buttonCart()}
          </div>
        ))}
      </div>
    );
  }
}

export default ProductListing;
