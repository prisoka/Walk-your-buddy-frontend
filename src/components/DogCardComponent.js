import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { walkerAcceptsReq } from '../redux/actions/requestsActions';
const dateFormat = require('dateformat');

class DogCard extends Component {
  state = {
    accepted: false
  }

  acceptRequest = (e) => {
    e.preventDefault()
    const {
      id,
      user_id,
      dog_id,
      request_date,
      request_time,
      walker_id
    } = this.props.request

    const { walkerAcceptsReq, history } = this.props

    let acceptedRequest = {
      id: id,
      user_id: user_id,
      dog_id: dog_id,
      request_date: request_date,
      request_time: request_time,
      walker_id: walker_id,
    }
    walkerAcceptsReq(acceptedRequest, history)
  }

  render() {
    const { accepted } = this.state
    const { id, dog_name, dog_photo_url, first_name, request_date, request_time, address_one, address_two, zip, walker_id, handleAcceptance } = this.props.request
    const formattedDate = dateFormat(request_date, "mm-dd-yyyy");

    // if the walker_id exists, and if it matches the token id, conditional render!!!
    return (
      <div className="column is-one-quarter">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={ dog_photo_url ? dog_photo_url : "https://bulma.io/images/placeholders/1280x960.png" }
                alt="dog_photo"
              />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4"><b>Dog: </b>{dog_name}</p>
                <p className="subtitle is-6"><b>Owner: </b>{first_name}</p>
              </div>
            </div>

            <div className="media">
              <div className="content">
                <p className="subtitle is-6"><b>Date:</b></p>
                <p dateTime="2016-1-1">{formattedDate}</p>
              </div>
            </div>

            <div className="content">
              <p className="subtitle is-6"><b>Time:</b></p>
              <p dateTime="2016-1-1">{request_time}</p>
            </div>

            <div className="content">
              <p className="subtitle is-6"><b>Pickup at:</b></p>
              <p className="subtitle is-6">{address_one + ", " + address_two + ", " + zip}</p>
            </div>

            { accepted ? (
              <p className="has-text-success">Request Accepted!</p>
              ) : (
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="button is-success is-outlined is-centered"
                    type='submit'
                    onClick={(e) => this.acceptRequest(e)}
                    >
                    <span className="icon is-small">
                      <i className="fas fa-check"></i>
                    </span>
                    <span>Accept</span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-danger is-outlined is-centered">
                    <span>Decline</span>
                    <span className="icon is-small">
                      <i className="fas fa-times"></i>
                    </span>
                  </a>
                </p>
              </div>
              )
            }

          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  walkerAcceptsReq,
}, dispatch)

export default connect(null, mapDispatchToProps)(DogCard)
