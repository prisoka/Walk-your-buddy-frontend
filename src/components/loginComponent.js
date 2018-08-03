import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <h3 class="title has-text-grey">Login</h3>
              <p class="subtitle has-text-grey">Login to access your WYB account.</p>
              <div class="box">
                <figure class="avatar">
                  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
                <form>
                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input id='login_email-field' class="input" type="email" placeholder="Email" required />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                      <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                      </span>
                    </p>
                  </div>

                  <div class="field">
                    <p class="control has-icons-left">
                      <input id='login_password-field' class="input" type="password" placeholder="Password" required />
                      <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <label class="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>
                  <div class="field is-grouped is-grouped-centered">
                    <p class="control">
                      <input id="login_submit-form" type='submit' class="button is-primary is-rounded" value="Login" />
                    </p>
                  </div>
                </form>
              </div>
              <p class="has-text-grey">
                <a href="../">Signup</a> &nbsp;·&nbsp;
                <a href="../"> Forgot password</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
