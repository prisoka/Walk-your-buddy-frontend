import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/userActions'
// import GoogleApi from './GoogleApiComponent'

class UserIndex extends Component {
  render() {
    return (
      <div>
        <section className="hero is-warning is-medium is-bold">
          <div className="hero-body has-bg-img">
            <div className="container has-text-centered">
              <h1 className="title">
                Welcome, {localStorage.getItem('userObjectFirstName')}!
              </h1>
              <br/>
              <p className="has-text-centered">
                <Link to="/add_dog" className="button is-warning is-inverted is-outlined is-rounded is-medium">Add Your Dog</Link> &nbsp;
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns is-centered">
                <div className="column is-half">
                  <br/><br/><br/>
                  <p className="has-text-centered">
                    <Link to="/request" className="button is-primary is-medium is-outlined"><b>Book A Walk</b></Link> &nbsp;
                  </p>
                  <br/>
                  <p className="has-text-centered">
                    <Link to="/request" className="button is-primary is-medium is-outlined">Upcoming Walks</Link> &nbsp;
                  </p>
                  <br/>
                  <p className="has-text-centered">
                    <Link to="/request" className="button is-primary is-medium is-outlined">Past Walks</Link> &nbsp;
                  </p>
                </div>
                <div className="column is-half">
                  <h2 className="subtitle">
                    Available walkers near you:
                  </h2>
                  <figure className="image is-4by3">
                    {/* <GoogleApi/> */}
                    <img src="SF_CA.png" alt="San_Francisco" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)
