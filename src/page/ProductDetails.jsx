import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById, handleClick } from '../services/api';

class ProductDetails extends Component {
  state = {
    details: [],
  };

  async componentDidMount() {
    const { history: { location: { pathname } } } = this.props;
    const id = pathname.split('/')[2];
    const detail = await getProductById(id);

    this.setState({
      details: detail,
    });
  }

  render() {
    const { details: { id, title, thumbnail, price } } = this.state;
    return (
      <div>
        <div>
          <p data-testid="product-detail-name">{title}</p>
          <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
          <p data-testid="product-detail-price">{price}</p>
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ () => handleClick(id, title, thumbnail, price) }
        >
          Adicionar ao Carrinho

        </button>
        <Link to="/cart">
          <button data-testid="shopping-cart-button">Carrinho de Compras</button>
        </Link>
      </div>

    );
  }
}

ProductDetails.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
