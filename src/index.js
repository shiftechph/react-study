import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import App from './App';
import { Route, Router, Switch, Redirect } from 'react-router-dom';

import { history } from './helpers';

import { LoginPage } from './pages/login';

const MainRoute = () => {

  return (
    <Router history={history}>
      <Switch>

        <Route path={'/login-screen'} component={ LoginPage } />

        <Route path={'/'} component={ App } />
      
      </Switch>
    </Router>
  )

}



ReactDOM.render(
  <React.StrictMode>
    <MainRoute />
  </React.StrictMode>,
  document.getElementById('root')
);