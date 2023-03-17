import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (

      <div>
        <form action="">
          <input type="text" />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </form>
        <Link to="/Cart">
          <button data-testid="shopping-cart-button"> Carrinho de Compras</button>
        </Link>
      </div>

    );
  }
}

export default Home;
