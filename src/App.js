import React, { Component } from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Custom from './Custom/Custom'

import './App.css';

class App extends Component {

  render() {
    return (
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/custom" component={Custom} />
          </Switch>
        </HashRouter>
    );
  }
}

export default App;
