import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        <link to="/Cart" data-testid="shopping-cart-button" />
      </div>
    );
  }
}

export default Cart;
