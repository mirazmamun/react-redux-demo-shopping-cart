import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Auth from '../services/auth'

const auth = new Auth();

class Callback extends React.Component {
  componentDidMount() {
    auth.handleAuthentication(async (err, authResult) => {
      if (err) this.props.history.push('/');
      this.props.history.push('/profile');
    });
  }

  render() {
    return <div>Loading...</div>;
  }
}

export default Callback;
