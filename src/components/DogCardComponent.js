import React, { Component } from 'react';

class DogCard extends Component {
  render() {
    return (
      <div className="column is-one-quarter">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="dog" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="user" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">Aquila</p>
                <p className="subtitle is-6">owner: Priscilla</p>
              </div>
            </div>

            <div className="content">
              <p className="subtitle is-6">When?</p>
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>

            <div className="content">
              <p className="subtitle is-6">Pickup at:</p>
              <p className="subtitle is-6">{this.address}</p>
            </div>
          </div>
            <footer className="card-footer">
            <a href="#" className="card-footer-item">Accept</a>
            <a href="#" className="card-footer-item">Decline</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default DogCard;
