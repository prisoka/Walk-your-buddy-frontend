import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Login to access your WYB account.</p>
              <div className="box">
                <figure className="avatar">
                  <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
                <form>
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input id='login_email-field' className="input" type="email" placeholder="Email" required />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                      </span>
                    </p>
                  </div>

                  <div className="field">
                    <p className="control has-icons-left">
                      <input id='login_password-field' className="input" type="password" placeholder="Password" required />
                      <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>
                  <div className="field is-grouped is-grouped-centered">
                    <p className="control">
                      <input id="login_submit-form" type='submit' className="button is-primary is-rounded" value="Login" />
                    </p>
                  </div>
                </form>
              </div>
              <p className="has-text-grey">
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
