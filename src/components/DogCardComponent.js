import React, { Component } from 'react';
var dateFormat = require('dateformat');

class DogCard extends Component {
  render() {
    const { dog_name, dog_photo_url, first_name, request_date, request_time, address_one, address_two, zip } = this.props.request
    const formattedDate = dateFormat(request_date, "mm-dd-yyyy");

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
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item button is-success is-outlined">Accept</a>
            <a href="#" className="card-footer-item button is-danger is-outlined">Decline</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default DogCard;
