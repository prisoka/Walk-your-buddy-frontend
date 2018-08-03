import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section className="hero is-info is-medium is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">

              <div className="navbar-brand">
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span>Account</span>
                  <span>Contact us</span>
                  <span>Logout</span>
                </span>
              </div>

              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <div className="tabs is-right">
                    <ul>
                      <li className="is-active"><a>Home</a></li>
                      <li><a href="">Account</a></li>
                      <li><a href="">Contact us</a></li>
                      <li><a href="">Logout</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Welcome to WYB <br/> &lt;Book A Walk&gt;
            </h1>
            <h2 className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
