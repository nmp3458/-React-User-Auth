import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './styles/App.scss';

import './components/Common/FontLibrary';
import { RouteConst } from './utils/constants';
import { Login, Register } from './components/User';
import { Dashboard } from './components/Layout';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path={RouteConst.Login} component={Dashboard} />
          <Route path={RouteConst.Register} component={Register} />
          <Route path={RouteConst.Dashboard} component={Dashboard} />
        </Switch>
        <Redirect to='/' />
      </Router>
    </div>
  );
}

export default App;
