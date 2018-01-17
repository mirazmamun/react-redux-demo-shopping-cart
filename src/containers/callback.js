import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Auth from '../services/auth'

const auth = new Auth();

class Callback extends React.Component {
  componentDidMount() {
    auth.handleAuthentication(async (err, authResult) => {
      if (err) this.props.history.push('/');
      const result = await this.props.authMutation({
        variables: {
          accessToken: authResult.idToken
        }
      });
      console.log(result)
      auth.storeGraphCoolCred(result.data.authenticateUser);
      this.props.history.push('/profile');
    });
  }

  render() {
    return <div>Loading...</div>;
  }
}

// 1
const AUTH_MUTATION = gql`
  # 2
  mutation authMutation($accessToken: String!) {
    authenticateUser(accessToken: $accessToken) {
      id
      token
    }
  }
`;

// 3
export default graphql(AUTH_MUTATION, { name: 'authMutation' })(Callback);

// export default withData(PageCallback);
