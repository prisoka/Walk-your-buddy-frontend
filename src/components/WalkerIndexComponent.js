import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DogCard from './DogCardComponent'

class WalkerIndex extends Component {
  render() {
    return (
      <div>
        <section className="hero is-link is-medium is-bold">
          <div className="hero-body has-bg-img">
            <div className="container has-text-centered">
              <h1 className="title">
                Hi, WALKER_NAME!
              </h1>
              <h2 className="subtitle">
                HERE ARE THE DOGS REQUESTS:
              </h2>
              <h2>
                <Link to="/" className="button is-link is-inverted is-rounded is-focused">My Bookings</Link>
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div>
            <DogCard />
          </div>
        </section>
      </div>
    );
  }
}

export default WalkerIndex;
