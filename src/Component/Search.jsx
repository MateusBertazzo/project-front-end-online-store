import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Products from './Products';

class Search extends Component {
  state = {
    search: '',
    dataProduct: [],
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSearch = async () => {
    const { search } = this.state;
    this.setState({
      search: '',
    });
    const produto = await getProductsFromCategoryAndQuery(search);
    this.setState({
      dataProduct: produto.results,
    });
  };

  render() {
    const { search, dataProduct } = this.state;
    return (
      <div>
        <form action="">
          <input
            name="search"
            type="text"
            data-testid="query-input"
            onChange={ this.handleChange }
            value={ search }
          />
          <button
            onClick={ this.handleSearch }
            type="button"
            data-testid="query-button"
          >
            Busque Aqui...
          </button>
          {dataProduct.length > 0 ? (
            dataProduct.map((product) => (
              <Products
                key={ product.id }
                title={ product.title }
                id={ product.id }
                thumbnail={ product.thumbnail }
                price={ product.price }
                data-testid="product"
              />
            ))
          ) : (
            <p>Nenhum produto foi encontrado</p>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
// getProductsFromCategoryAndQuery
