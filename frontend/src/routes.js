import React from 'react';
import { Route, Switch } from 'react-router-dom';
import pages from './Pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ pages.Home }/>
      <Route exact path="/add" component={ pages.AddEmployee }/>
      <Route exact path="/search" component={ pages.AllEmployees }/>
    </Switch>
  )
}

export default Routes;
