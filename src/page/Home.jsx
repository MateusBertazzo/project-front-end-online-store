import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Component/Categories';
import Search from '../Component/Search';

class Home extends Component {
  render() {
    return (

      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories />
        <Link to="/Cart">
          <button data-testid="shopping-cart-button"> Carrinho de Compras</button>
        </Link>
        <Search />
      </div>

    );
  }
}
// asd
export default Home;
