import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { userLogout } from '../redux/actions/userActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NavBar extends Component {
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
    const { userLogout, history, isLoggedIn, isUser } = this.props

    return (
      <div>
        <nav
          className="navbar is-transparent is-fixed-top"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <figure>
                <img src="paws.png" alt="paws"/>
              </figure>
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
                {
                  isLoggedIn ? (
                    isUser ? (
                      <div className="navbar-item">
                        <Link to="/user_index">Home</Link>
                      </div>
                    ) : (
                      <div className="navbar-item">
                        <Link to="/walker_index">Home</Link>
                      </div>
                    )
                  ) : (
                    <div className="navbar-item">
                      <Link to="/">Home</Link>
                    </div>
                  )
                }

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
              </div>
            </div>
          </div>
        </nav>
        <section className="hero is-white">
          <div className="hero-body">
            <div className="container">
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: Object.keys(state.user).length !== 0,
    isUser: state.user.user_type ? state.user.user_type === 'user' : false
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogout
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
