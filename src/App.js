import React from 'react';
import { Provider } from 'react-redux';
import Nav from './layouts/nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

import Home from './pages/home';
import Cart from './pages/cart'
import Login from './pages/login'

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {

 

  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
