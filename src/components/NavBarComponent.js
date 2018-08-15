import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { userLogout } from '../redux/actions/userActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NavBar extends Component {
  state = {
    navBarExpanded: false,
    isLoggedIn: false
  }

  toggleNav = () => {
    const { navBarExpanded } = this.state
    this.setState({
      navBarExpanded: !navBarExpanded
    })
  }

  // handleLogin() {
  //   const { isLoggedIn } = this.state
  //   this.setState({
  //     isLoggedIn: !isLoggedIn
  //   })
  // }
  //
  // handleLogout() {
  //   const { isLoggedIn } = this.state
  //   this.setState({
  //     isLoggedIn: isLoggedIn
  //   })
  // }


  render() {
    const { navBarExpanded, isLoggedIn } = this.state
    const { userLogout, history } = this.props

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

              <div
                id="navbarMenu"
                className={ navBarExpanded ? "navbar-menu is-active" : "navbar-menu" }
              >
                <div className="navbar-end">
                  <div className="navbar-item">
                    <Link to="/">Home</Link>
                  </div>

                  {/* {!isLoggedIn &&
                    <div className="navbar-end">
                      <div className="navbar-item">
                        <Link to="/login">Login</Link>
                      </div>
                      <div className="navbar-item">
                        <Link to="/signup">Signup</Link>
                      </div>
                    </div>
                  }

                  {!isLoggedIn &&
                    <div className="navbar-item">
                      <Link to="/" onClick={(e) => {userLogout(history)}}>Logout</Link>
                    </div>
                  } */}

                  {isLoggedIn ? (
                    <div className="navbar-item">
                      <Link to="/" onClick={(e) => {userLogout(history)}}>Logout</Link>
                    </div>
                  ) : (
                    <div className="navbar-end">
                      <div className="navbar-item">
                        <Link to="/login">Login</Link>
                      </div>
                      <div className="navbar-item">
                        <Link to="/signup">Signup</Link>
                      </div>
                    </div>
                  )}

                  {/* <div className="navbar-item">
                    <Link to="/" onClick={(e) => {userLogout(history)}}>Logout</Link>
                  </div> */}
                </div>
              </div>
            </div>
          </nav>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogout
}, dispatch)

export default connect(null, mapDispatchToProps)(NavBar)
