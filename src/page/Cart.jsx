import React, { Component } from 'react';
import { handleClick, handleClickDecrease } from '../services/api';

class Cart extends Component {
  state = {
    localStorageCart: [],
  };

  componentDidMount() {
    this.getLocalStorage();
  }

  increaseClick = ({ id, title, thumbnail, price }) => {
    const { localStorageCart } = this.state;
    localStorageCart.find((cart) => cart.id === id).quantity += 1;
    this.setState({
      localStorageCart,
    });

    handleClick(id, title, thumbnail, price);
  };

  decreaseClick = ({ id, title, thumbnail, price, quantity }) => {
    const { localStorageCart } = this.state;

    if (quantity > 1) {
      localStorageCart.find((cart) => cart.id === id).quantity -= 1;
      this.setState({
        localStorageCart,
      });
      handleClickDecrease(id, title, thumbnail, price);
    }
  };

  removeClick = (id) => {
    const { localStorageCart } = this.state;
    const get = localStorageCart.filter((cart) => cart.id !== id);
    localStorage.setItem('cart', JSON.stringify(get));
    this.getLocalStorage();
  };

  getLocalStorage = () => {
    let getData = JSON.parse(localStorage.getItem('cart'));

    if (getData === null) {
      getData = [];
    }
    this.setState({
      localStorageCart: getData,
    });
  };

  render() {
    const { localStorageCart } = this.state;
    return (
      <div data-testid="shopping-cart-button">
        {localStorageCart.map((cart) => (
          <div key={ cart.id }>
            <p data-testid="shopping-cart-product-name">{ cart.title }</p>
            <img src={ cart.thumbnail } alt={ cart.title } />
            <p data-testid="shopping-cart-product-quantity">{ cart.quantity }</p>
            <button
              data-testid="product-increase-quantity"
              onClick={ () => this.increaseClick(cart) }
              type="button"
            >
              +

            </button>
            <button
              data-testid="product-decrease-quantity"
              onClick={ () => this.decreaseClick(cart) }
              type="button"
            >
              -

            </button>
            <button
              data-testid="remove-product"
              onClick={ () => this.removeClick(cart.id) }
              type="button"
            >
              Remover

            </button>
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
