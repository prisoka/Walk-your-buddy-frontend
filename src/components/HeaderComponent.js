import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <section className="hero is-primary is-medium is-bold">
        <div className="hero-body has-bg-img">
          <div className="container has-text-centered">
            <h1 className="title">
              <b>Welcome to WYB</b>
            </h1>
            <br/>
            <h2 className="subtitle">
              <b>Walk Your Buddy</b> is a community that connects people who love dogs.<br/> If you can't walk your buddy, no problem, just ask a WYB family member to help you out!
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
