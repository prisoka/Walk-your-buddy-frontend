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
          <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="container">
              <div className="navbar-brand">
                <div
                  className="navbar-burger burger"
                  data-target="menu_options"
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
                  <div class="navbar-item">
                    <Link to="/">Home</Link>
                  </div>
                  <div class="navbar-item">
                    <Link to="/signup">Signup</Link>
                  </div>
                  <div class="navbar-item">
                    <Link to="/walkersignup">Become a walker!</Link>
                  </div>
                  <div class="navbar-item">
                    <Link to="/login">Login</Link>
                  </div>
                  <div class="navbar-item">
                    <Link to="/user_profile">Account</Link>
                  </div>
                  <div class="navbar-item">
                    <Link to="/">Logout</Link>
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
