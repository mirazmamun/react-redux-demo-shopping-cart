import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Profile from './containers/profile';
import About from './containers/about';
import Admin from './containers/admin';
import Home from './containers/home';
import Callback from './containers/callback';
import Auth from './services/auth';

const auth = new Auth();
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/callback" component={Callback} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/profile"
            render={props =>
              auth.isAuthenticated() ? (
                <Profile />
              ) : (
                <Redirect
                  to={{
                    pathname: '/'
                  }}
                />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
