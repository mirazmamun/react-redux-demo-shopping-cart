import React from 'react';
import Hero from '../components/hero';

const About = (props) => (
  <div>
    <Hero page="About">
      <div className="tile is-ancestor">
        <div className="tile is-4">
          <h1 className="">Demo App</h1>
        </div>
        <div className="tile">
          <h1 className="">You can contribuete</h1>
        </div>
      </div>
    </Hero>
  </div>
)

export default About;