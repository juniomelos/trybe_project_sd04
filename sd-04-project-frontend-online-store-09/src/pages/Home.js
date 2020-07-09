import React, { Component } from 'react';
import CategoryPanel from '../components/CategoryPanel';
import ProductList from '../components/ProductList';
import '../styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: '' };
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({ selectedCategory: category });
  }

  render() {
    const { addItemToCart } = this.props;
    const { selectedCategory } = this.state;
    return (
      <div className="homepage">
        <CategoryPanel setCategory={this.setCategory} />
        <ProductList selectedCategory={selectedCategory} addItemToCart={addItemToCart} />
      </div>
    );
  }
}

export default Home;
