import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
<footer class="footer">
  <div class="container">
    <div class="columns">
      <div class="column is-3 is-offset-2">
        <h2><strong>Category</strong></h2>
        <ul>
          <li><a href="#">Lorem ipsum dolor sit amet</a></li>
          <li><a href="#">Vestibulum errato isse</a></li>
          <li><a href="#">Lorem ipsum dolor sit amet</a></li>
        </ul>
      </div>
      <div class="column is-3">
        <h2><strong>Category</strong></h2>
        <ul>
          <li><a href="#">Labore et dolore magna aliqua</a></li>
          <li><a href="#">Kanban airis sum eschelor</a></li>
          <li><a href="#">Modular modern free</a></li>
        </ul>
      </div>
      <div class="column is-4">
        <h2><strong>Category</strong></h2>
        <ul>
          <li><a href="#">Objects in space</a></li>
          <li><a href="#">Playing cards with coyote</a></li>
        </ul>
      </div>
      </div>
      <div class="content has-text-centered">
        <div className="footer-copyright text-center py-3">
          <a href="https://github.com/prisoka">prisoka</a> - Copyright © 2018
        </div>
    </div>
  </div>
</footer>
    );
  }
}

export default Footer;
