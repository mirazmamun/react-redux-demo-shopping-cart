import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'chris92.auth0.com',
    clientID: 'xL6iuhjJHWp5S2iVZADxyRkAKkEMqSI5',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://chris92.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile email'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication(cb) {
    // const hash = process.browser ? window.location.hash : context.asPath;

    this.auth0.parseHash({ hash: window.location.hash }, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
          this.storeAuth0Cred(authResult, profile);
          cb(false, { ...authResult, ...profile });
        });
      } else if (err) {
        console.log(err);
        cb(true, err);
      }
    });
  }

  storeAuth0Cred(authResult, profile) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('scotch_auth_access_token', authResult.accessToken);
    localStorage.setItem('scotch_auth_id_token', authResult.idToken);
    localStorage.setItem('scotch_auth_expires_at', expiresAt);
    localStorage.setItem('scotch_auth_profile', JSON.stringify(profile));
  }

  storeGraphCoolCred(authResult) {
    localStorage.setItem('scotch_auth_gcool_token', authResult.token);
    localStorage.setItem('scotch_auth_gcool_id', authResult.id);
  }

  login() {
    this.auth0.authorize();
  }

  logout(history) {
    // Clear access token and ID token from local storage
    localStorage.removeItem('scotch_auth_access_token');
    localStorage.removeItem('scotch_auth_id_token');
    localStorage.removeItem('scotch_auth_expires_at');
    localStorage.removeItem('scotch_auth_profile');
    localStorage.removeItem('scotch_auth_gcool_token');
    localStorage.removeItem('scotch_auth_gcool_id');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(
      localStorage.getItem('scotch_auth_expires_at')
    );
    return new Date().getTime() < expiresAt;
  }

  getProfile() {
    return JSON.parse(localStorage.getItem('scotch_auth_profile'));
  }
}
