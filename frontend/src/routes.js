import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/home';
import AddEmployee from './Pages/addEmployee';
import AllEmployees from './Pages/allEmployees';


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/add" component={ AddEmployee }/>
      <Route exact path="/search" component={ AllEmployees }/>
    </Switch>
  )
}

export default Routes;
