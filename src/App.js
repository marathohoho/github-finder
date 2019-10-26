import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GithubState from './context/github/GithubState';

const App = () => {
  return (
    <GithubState>
      <Router>
        <div>
          <nav className="navbar bg-primary">
            <Navbar title=" Github Finder" icon="fab fa-github" />
          </nav>
          <div className="container">
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                render={props => {
                  return (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  );
                }}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => <User {...props} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
