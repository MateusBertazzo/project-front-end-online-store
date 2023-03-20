import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

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
    const { details: { title, thumbnail, price } } = this.state;
    return (
      <div>
        <div>
          <p data-testid="product-detail-name">{title}</p>
          <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
          <p data-testid="product-detail-price">{price}</p>
        </div>
        <Link to="/cart">
          <button data-testid="shopping-cart-button">Comprar</button>
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
