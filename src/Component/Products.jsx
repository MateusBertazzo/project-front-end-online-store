import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { handleClick } from '../services/api';

class Products extends Component {
  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ `/ProductDetails/${id}` }
        >
          <div id={ id }>
            <h3>{ title }</h3>
            <img src={ thumbnail } alt={ title } />
            <h4>{ price }</h4>
          </div>
        </Link>
        <button
          onClick={ () => handleClick(id, title, thumbnail, price) }
          data-testid="product-add-to-cart"
        >
          Adiciona

        </button>
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Products;
