import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userSignup } from '../redux/actions/userActions'

class Signup extends Component {
  render() {
    const { userSignup } = this.props

    let user = {
      id: 4,
      email: 'pris4@gmail.com',
      password: '12345678',
      first_name: 'priscilla4',
      last_name: 'priscilla4',
      phone_number: 5105105511,
      address_one: '44 tehama street',
      address_two: '',
      zip: 94105
    }

    userSignup(user)

    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-half is-offset-one-quarter">
              <h3 className="title has-text-grey">Signup</h3>
              <div className="box">
                <form id="create_user_form">

                  <div className="field">
                    <label className="label has-text-left" htmlFor="email">Email</label>
                    <p className="control has-icons-left has-icons-right">
                      <input id='create_email_field' className="input" type="email" pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" required />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                      </span>
                    </p>
                  </div>

                  <div className="field">
                    <label className="label has-text-left" htmlFor="password">Choose Password</label>
                    <p className="control has-icons-left">
                      <input id='create_password_field' className="input" type="password" minLength="8" required />
                      <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>

                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <label className="label has-text-left" htmlFor="first_name">First name</label>
                      <input id='first_name' className="input" type="text" required />
                    </p>
                  </div>

                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <label className="label has-text-left" htmlFor="last_name">Last name</label>
                      <input id='last_name' className="input" type="text" required />
                    </p>
                  </div>

                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <label className="label has-text-left" htmlFor="phone">Phone number</label>
                      <input id='phone_number' className="input" type="number" required />
                    </p>
                  </div>

                  <div className="field">
                    <label className="label has-text-left" htmlFor="address1">Address Line1</label>
                    <div className="control">
                      <input id="address1" name="address1" type="text" placeholder="" className="input" />
                      <span className="help">Street address, P.O. box, company name, c/o</span>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label has-text-left" htmlFor="Address2">Address Line2</label>
                    <div className="control">
                      <input id="address2" name="address2" type="text" placeholder="" className="input" />
                      <span className="help">Apartment, suite , unit, building, floor, etc.</span>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label has-text-left" htmlFor="zip">Zip/Postal code</label>
                    <div className="control">
                      <input id="zip" name="zip" type="number" placeholder="zip or postal code" className="input" required="" />
                    </div>
                  </div>

                  <div className="field is-grouped is-grouped-centered">
                    <p className="control">
                      <input id="signup_submit-form" type='submit' className="button is-primary is-rounded" value="Signup" />
                    </p>
                  </div>
                </form>
              </div>
              <p className="has-text-grey">
                Have you been here before? &nbsp;·&nbsp; <a href="../">Login</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userSignup: bindActionCreators(userSignup, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Signup)
