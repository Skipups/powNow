import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import Home from './Home';
import store from '../store';
import ShowResorts from './ShowResorts';
import { fetchPassesThunk } from '../redux/passes';

export default class Root extends Component {
  async componentDidMount() {
    await store.dispatch(fetchPassesThunk());
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/passes/:id" component={ShowResorts} />
          </Switch>
        </div>
      </Router>
    );
  }
}
