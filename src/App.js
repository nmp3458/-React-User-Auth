import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './components/fontawesome';

import './App.scss';

import { RoutePath } from './components/constants';

import { Login, Register } from './components/User';
import { Dashboard } from './components/Layout';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path={RoutePath.Login} component={Login} />
          <Route path={RoutePath.Register} component={Register} />
          <Route path={RoutePath.Dashboard} component={Dashboard} />
        </Switch>
        <Redirect to='/' />
      </Router>
    </div>
  );
}

export default App;
