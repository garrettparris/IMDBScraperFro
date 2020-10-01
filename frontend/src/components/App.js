import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";
import { doLogin, doLogout } from "../actions/auth";

const App = ({ auth, doLogin, doLogout }) => (
  <Router history={history}>
        <div>
            hi
      </div>
  </Router>
);

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { doLogin, doLogout },
)(App);
