import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DogCard from './DogCardComponent'
import { fetchRequests } from '../redux/actions/requestsActions'

class WalkerIndex extends Component {
  componentDidMount(){
    const { fetchRequests } = this.props
    fetchRequests()
  }
  render() {
    const { user, requests } = this.props
    return (
      <div>
        <section className="hero is-link is-medium is-bold">
          <div className="hero-body has-bg-img">
            <div className="container has-text-centered">
              <h1 className="title">
                Welcome back, {localStorage.getItem('userObjectFirstName')}!
              </h1>
              <br/>
              <h2 className="subtitle">
                Here are the dogs requests in your area:
              </h2>
              {/* <h2>
                <Link to="/" className="button is-link is-inverted is-rounded is-focused">My Bookings</Link>
              </h2> */}
            </div>
          </div>
        </section>
        <section>
          <div id="eventContainer" className="columns is-left is-multiline" style={{padding: "2rem"}}>
            {requests.map((request) => (
              <DogCard
                key={request.id}
                request={request}
                {...this.props} // passing the props to inject history to child/children
              />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    requests: state.requests
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRequests
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WalkerIndex)
