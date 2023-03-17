import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.setState({}, async () => {
      const setCategorie = await getCategories();
      this.setState({ categories: setCategorie });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h2>categorias</h2>
        <ul>
          {categories.map((categorie) => (
            <li key={ categorie.id }>
              <button data-testid="category" type="button">
                {categorie.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

    );
  }
}

export default Categories;
