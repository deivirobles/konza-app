import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import Users from "./pages/Users";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";
import UserContext from "./components/UserContext"

export default class App extends Component {
  state = {
    user: null
  }

  setUser = (user) => {
    this.setState({ user });
  }
  
  clearUser = () => {
    this.setState({ user: null });
  }

  render () {
    const { user } = this.state;
    return (
      <Fragment>
        <UserContext.Provider value={{
          user,
          setUser: this.setUser,
          clearUser: this.clearUser
        }}>
          <NavBar />
          <Switch>
            <Route
              path="/tasks"
              render={props => <Tasks {...props} />}
            />
            <Route path="/projects/:id" component={Projects} />
            <Route path="/projects" component={Projects} />
            <Route path="/users" component={Users} />
            <Route
              path="/signin"
              render={props => <SignIn {...props} />}
            />
            <Route
              path="/signup"
              render={props => <SignUp {...props} />}
            />
            <Route
              path="/signout"
              render={props => <SignOut {...props} />}
            />
            <Redirect to="/tasks" />
          </Switch>
        </UserContext.Provider>
      </Fragment>
    );
  }
}