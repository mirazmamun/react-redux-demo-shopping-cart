import React from 'react';
import Hero from '../components/hero';
import Auth from '../services/auth';

const auth = new Auth();

const Profile = props => (
  <div>
    <Hero page="Profile"></Hero>
  </div>
);

export default Profile;
