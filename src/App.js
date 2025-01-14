import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';
import GlobalStyles from './global/styles';

const App = () => (
  <>
    <GlobalStyles />
    <Router history={history}>
      <Routes />
    </Router>
  </>
);

export default App;
