import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <section className="hero is-primary is-medium is-bold">
        <div className="hero-body has-bg-img">
          <div className="container has-text-centered">
            <h1 className="title">
              Welcome to WYB
            </h1>
            <h2 className="subtitle">
              Walk Your Buddy is a community that connects people who loves dogs.<br/> If you can't walk your buddy today, no problem, just ask WYB family to help you out!
            </h2>
            <h2>
              <Link to="/login" className="button is-primary is-inverted is-rounded is-focused is-medium">Book A Walk</Link> &nbsp;
              <Link to="/walkersignup" className="button is-primary is-inverted is-rounded is-focused is-medium">Become A WYB Walker!</Link>
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
