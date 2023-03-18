import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Products from './Products';

class Categories extends Component {
  state = {
    categories: [],
    productsByCat: [],
  };

  componentDidMount() {
    this.setState({}, async () => {
      const setCategorie = await getCategories();
      this.setState({ categories: setCategorie });
    });
  }

  handleClick = async ({ target }) => {
    const { id } = target;
    const getProduct = await getProductsFromCategoryAndQuery(id);
    this.setState({
      productsByCat: getProduct.results,
    });
  };

  render() {
    const { categories, productsByCat } = this.state;
    return (
      <div>
        <h2>categorias</h2>
        <ul>
          {categories.map((categorie) => (
            <li key={ categorie.id }>
              <button
                data-testid="category"
                type="button"
                onClick={ this.handleClick }
                id={ categorie.id }
              >
                {categorie.name}
              </button>
            </li>
          ))}
        </ul>
        {productsByCat.map((product) => (
          <Products
            data-testid="product"
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
            id={ product.id }
          />
        ))}
      </div>

    );
  }
}

export default Categories;
