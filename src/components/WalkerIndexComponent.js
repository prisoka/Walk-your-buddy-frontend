import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddDog from './AddDogComponent';


class WalkerIndex extends Component {
  render() {
    return (
      <section className="hero is-link is-medium is-bold">
        <div className="hero-body has-bg-img">
          <div className="container has-text-centered">
            <h1 className="title">
              Hi, WALKER_NAME!
            </h1>
            <h2 className="subtitle">
              HERE ARE THE DOGS REQUESTS:
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default WalkerIndex;
