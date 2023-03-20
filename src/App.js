import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './page/Home';
import Cart from './page/Cart';
import ProductDetails from './page/ProductDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/Cart" component={ Cart } />
          <Route
            exact
            path="/ProductDetails/:id"
            render={ (props) => <ProductDetails { ...props } /> }
            component={ ProductDetails }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
