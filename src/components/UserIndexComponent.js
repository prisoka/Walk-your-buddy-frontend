import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddDog from './AddDogComponent';


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
              STEPS TO BOOK A WALK: <br/>
              ADD A DOG: <br/>
              SELECT DATE AND TIME: <br/>
              REQUEST AVAILABLE WALKER: <br/>
            </h2>
            <h2>
              <Link to="/add_dog" className="button is-warning is-inverted is-rounded is-focused">Add Your Dog</Link>
            </h2>
            <h2>
              <Link to="/" className="button is-warning is-inverted is-rounded is-focused">History</Link>
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default UserIndex;
