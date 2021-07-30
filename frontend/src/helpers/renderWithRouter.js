//src/renderWithRouter.js
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import GlobalProvider from '../Context';

const renderWithRouter = (component, route = '/') => {
  const history = createMemoryHistory();
  history.push(route);
  return {
    ...render(
      <Router history={history}>
        <GlobalProvider>
        {component}
        </GlobalProvider>
      </Router>), history,
  };
};

export default renderWithRouter;