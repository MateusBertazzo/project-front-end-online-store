import React, { Component } from 'react';

class Cart extends Component {
  state = {
    localStorageCart: [],
  };

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const getData = JSON.parse(localStorage.getItem('cart'));

    this.setState({
      localStorageCart: [...getData],
    });
  };

  render() {
    const { localStorageCart } = this.state;
    return (
      <div>
        {localStorageCart.map((cart) => (
          <div key={ cart.id }>
            <p data-testid="shopping-cart-product-name">{ cart.title }</p>
            <p data-testid="shopping-cart-product-quantity">{ cart.quantity }</p>
          </div>
        ))}
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      </div>
    );
  }
}

export default Cart;
