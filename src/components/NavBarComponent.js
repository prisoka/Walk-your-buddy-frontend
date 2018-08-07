import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  toggleNav = () => {
    var nav = document.querySelector('.navbar-menu');
    if(nav.className === "navbar-menu") {
      nav.className = "navbar-menu is-active";
    } else {
      nav.className = "navbar-menu";
    }
  }

  render() {
    return (
      <section className="hero is-primary is-medium is-bold">
        <div className="hero-head">
          <nav className="navbar is-primary is-fixed-top">
            <div className="container">

                <div className="navbar-brand">
                  <div
                    className="navbar-burger burger"
                    data-target="Options"
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={this.toggleNav}
                  >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </div>
                </div>

              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <div className="tabs is-right">
                    <ul>
                      <li className="is-active">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/signup">Signup</Link>
                      </li>
                      <li>
                        <Link to="/walkersignup">Become a walker!</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/user_profile">Account</Link>
                      </li>
                      <li>
                        <Link to="/">Logout</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default Header;
