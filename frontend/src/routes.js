import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NewEmployee from './pages/NewEmployee';
import { Link } from 'react-router-dom';
import EditEmployee from './pages/EditEmployee';
import Header from './components/Header';

const Routes = () => {
  return ( 
    <Router>
      <Route path="/">
        <Header/>
      </Route>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/employees/new" component={NewEmployee} />
        <Route path="/employees/edit/:id" component={EditEmployee} />
      </Switch>
    </Router>
  )
}

export default Routes;