import React from 'react';
import Nav from './nav'
import './hero.css'

const Hero = ({page, children}) => (
  <section className="hero is-primary is-bold is-fullheight">
    <div className="hero-title">
    <Nav></Nav>
    </div>
    <div className="hero-body">
      <div className="container">
        {children}
      </div>
    </div>
    <div className="hero-footer"></div>
  </section>
);

export default Hero;
