import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  state = {
    navBarExpanded: false
  }

  toggleNav = () => {
    const { navBarExpanded } = this.state
    this.setState({
      navBarExpanded: !navBarExpanded
    })
  }

  render() {
    const { navBarExpanded } = this.state
    return (
      <section className="is-primary is-medium is-bold">
          <nav
            className="navbar is-transparent is-fixed-top"
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

              <div id="navbarMenu" className={navBarExpanded? "navbar-menu is-active" : "navbar-menu"} >
                <div className="navbar-end">
                  <div className="navbar-item">
                    <Link to="/">Home</Link>
                  </div>
                  <div className="navbar-item">
                    <Link to="/signup">Signup</Link>
                  </div>
                  <div className="navbar-item">
                    <Link to="/login">Login</Link>
                  </div>
                  <div className="navbar-item">
                    <Link to="/user_profile"> My Account</Link>
                  </div>
                  <div className="navbar-item">
                    <Link to="/">Logout</Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
      </section>
    );
  }
}

export default Header;
