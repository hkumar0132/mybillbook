import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import HomePage from './pages/HomePage';
import Items from './pages/Items';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home-page" render={(props) => <HomePage {...props} />} />
      <Route path="/items" render={(props) => <Items {...props} />} />
      <Redirect from="*" to="/home-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
