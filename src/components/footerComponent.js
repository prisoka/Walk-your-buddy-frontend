import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
<footer class="footer">
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter">
        <h2><strong>About us</strong></h2>
        <ul>
          <li><a href="#">Lorem ipsum dolor sit amet</a></li>
          <li><a href="#">Vestibulum errato isse</a></li>
          <li><a href="#">Lorem ipsum dolor sit amet</a></li>
        </ul>
      </div>

      <div class="column is-one-quarter">
        <h2><strong>Help</strong></h2>
        <ul>
          <li><a href="#">Labore et dolore magna aliqua</a></li>
          <li><a href="#">Kanban airis sum eschelor</a></li>
        </ul>
      </div>
    </div>

    <div class="content has-text-centered">
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
