import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Component/Categories';
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
        <Categories />
        <Link to="/Cart">
          <button data-testid="shopping-cart-button"> Carrinho de Compras</button>
        </Link>
      </div>

    );
  }
}
// asd
export default Home;
