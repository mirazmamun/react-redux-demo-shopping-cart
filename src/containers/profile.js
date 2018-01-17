import React from 'react';
import Hero from '../components/hero';
import Auth from '../services/auth';

const auth = new Auth();

const Profile = props => (
  <div>
    <Hero page="Profile"></Hero>
    <h2 className="title">Nickname: {auth.getProfile().nickname}</h2>
  </div>
);

export default Profile;
