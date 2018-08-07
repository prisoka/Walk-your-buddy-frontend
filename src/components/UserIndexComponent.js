import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserIndex extends Component {
  render() {
    return (
      <section className="hero is-warning is-medium is-bold">
        <div className="hero-body has-bg-img">
          <div className="container has-text-centered">
            <h1 className="title">
              Hi, USER_NAME!
            </h1>
            <h2 className="subtitle">
              STEPS TO BOOK A WALK:
            </h2>
            <h2>
              <Link to="/add_dog" className="button is-warning is-inverted is-rounded is-focused">Add Your Dog</Link>
            </h2>
            <h2>
              <Link to="/" className="button is-warning is-inverted is-rounded is-focused">My Requests</Link>
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default UserIndex;
