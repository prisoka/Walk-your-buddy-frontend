import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class UserIndex extends Component {
  state = ''
  render() {
    const { users } = this.props

    return (
      <div>
        <section className="hero is-warning is-medium is-bold">
          <div className="hero-body has-bg-img">
            <div className="container has-text-centered">
              <h1 className="title">
                Hi, {this.props.first_name}!
              </h1>
              <br/>
              <p className="has-text-centered">
                <Link to="/add_dog" className="button is-warning is-inverted is-rounded is-focused is-medium">Add Your Dog</Link>
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns is-centered">
                <div className="column is-6 is-offset-1">
                  <h2 className="subtitle is-4">
                    Available walkers near you:
                  </h2>
                  <p className="has-text-centered">
                    <Link to="/request" className="button is-warning is-medium">Book A Walk</Link> &nbsp;
                  </p>
                  <br/>
                  <p className="has-text-centered">
                    <Link to="/" className="button is-warning is-medium">Upcoming Walks</Link>
                  </p>
                  <br/>
                  <p className="has-text-centered">
                    <Link to="/" className="button is-warning is-medium">Past Walks</Link>
                  </p>
                </div>
                <div className="column is-5">
                  <figure className="image is-4by3">
                    <img src="https://picsum.photos/800/600/?random" alt="Description" />
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
    users: state.users
  }
}
export default connect(mapStateToProps, null)(UserIndex)
