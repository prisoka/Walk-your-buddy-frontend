import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <h2><strong>About us</strong></h2>
              <ul>
                <li><a href="#">WYB history</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>

            <div className="column is-one-quarter">
              <h2><strong>Locations</strong></h2>
              <ul>
                <li><a href="#">San Francisco, CA</a></li>
                <li><a href="#">Sydney, NSW</a></li>
                <li><a href="#">Sao Paulo, SP</a></li>
              </ul>
            </div>
          </div>

          <div className="content has-text-centered">
            <p>
              <strong>WYB</strong> by <a href="https://github.com/prisoka">prisoka</a>. Copyright © 2018
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
