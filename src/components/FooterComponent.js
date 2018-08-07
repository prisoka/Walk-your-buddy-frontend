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
                <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                <li><a href="#">Vestibulum errato isse</a></li>
                <li><a href="#">Lorem ipsum dolor sit amet</a></li>
              </ul>
            </div>

            <div className="column is-one-quarter">
              <h2><strong>Help</strong></h2>
              <ul>
                <li><a href="#">Labore et dolore magna aliqua</a></li>
                <li><a href="#">Kanban airis sum eschelor</a></li>
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
