import React, { Component } from 'react';
import { FaShippingFast } from 'react-icons/fa';
import '../styles/freeShipping.css';


export default class FreeShipping extends Component {
  render() {
    return (
      <div className="free-shipping-container">
        <FaShippingFast />
        <p data-testid="free-shipping">Frete Grátis!</p>
      </div>
    );
  }
}
