import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import PageNotFound from './components/pages/PageNotFound';

const App = () => {
  return (
    <AlertState>
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
                    return <Home />;
                  }}
                />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  render={props => <User {...props} />}
                />
                <Route path="*" component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
    </AlertState>
  );
};

export default App;
