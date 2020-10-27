import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Oklogin from "./Oklogin";
import Logout from "./Logout";
import Navbar from "./Navbar";
import NotFound from "./Notfound";
import BoardRead from "./BoardRead";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Oklogin} />
          <Route exact path="/logout" component={Logout} />
          <Route path="/readboard/:idx" component={BoardRead} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
