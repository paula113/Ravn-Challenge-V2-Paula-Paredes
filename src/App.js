import React from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Registry from './views/Registry';
import Details from './views/Details';
import './App.scss';
// import { from } from '@apollo/react-hooks';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Registry} />
      <Route exact path="/Details" component={Details} />
    </Switch>
  </Router>
);

export default App;
