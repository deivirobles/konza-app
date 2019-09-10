import React, { Component } from 'react'
import { removeToken } from "../services/auth";
import UserContext from "./../components/UserContext";

export default class SignOut extends Component {
  static contextType = UserContext;

  componentDidMount() {
    removeToken();
    this.context.clearUser();
    this.props.history.push("/");
  }

  render () {
    return <div />
  }
}
