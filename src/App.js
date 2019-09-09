import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from './components/NavBar';
import Tasks from './pages/Tasks';
import Projects from './pages/Projects';
import Users from './pages/Users';
import Register from './pages/Register';
import Login from './pages/Login';

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path="/tasks" render={(props) => <Tasks {...props} user="Gustavo" />} />
        <Route path="/projects/:id" component={Projects} />
        <Route path="/users" component={Users} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Redirect to="/tasks" />
      </Switch>
    </Fragment>
  )
}
