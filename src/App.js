import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './page/Home';
import Cart from './page/Cart';

class App extends Component {
  render() {
    return (

      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/Cart" component={ Cart } />
      </Switch>

    );
  }
}

export default App;
