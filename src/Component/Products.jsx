import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Products extends Component {
  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <div id={ id } data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <h4>{ price }</h4>
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
