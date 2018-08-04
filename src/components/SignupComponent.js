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
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-half is-offset-one-quarter">
              <h3 class="title has-text-grey">Signup</h3>
              <div class="box">
                <form id="create_user_form">

                  <div class="field">
                    <label class="label has-text-left" for="email">Email</label>
                    <p class="control has-icons-left has-icons-right">
                      <input id='create_email_field' class="input" type="email" pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" required />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                      <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                      </span>
                    </p>
                  </div>

                  <div class="field">
                    <label class="label has-text-left" for="password">Choose Password</label>
                    <p class="control has-icons-left">
                      <input id='create_password_field' class="input" type="password" minlength="8" required />
                      <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>

                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <label class="label has-text-left" for="first_name">First name</label>
                      <input id='first_name' class="input" type="text" required />
                    </p>
                  </div>

                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <label class="label has-text-left" for="last_name">Last name</label>
                      <input id='last_name' class="input" type="text" required />
                    </p>
                  </div>

                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <label class="label has-text-left" for="phone">Phone number</label>
                      <input id='last_name' class="input" type="number" required />
                    </p>
                  </div>

                  <div class="field">
                    <label class="label has-text-left" for="address1">Address Line1</label>
                    <div class="control">
                      <input id="address1" name="address1" type="text" placeholder="" class="input" />
                      <span class="help">Street address, P.O. box, company name, c/o</span>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label has-text-left" for="Address2">Address Line2</label>
                    <div class="control">
                      <input id="address2" name="address2" type="text" placeholder="" class="input" />
                      <span class="help">Apartment, suite , unit, building, floor, etc.</span>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label has-text-left" for="zip">Zip/Postal code</label>
                    <div class="control">
                      <input id="zip" name="zip" type="number" placeholder="zip or postal code" class="input" required="" />
                    </div>
                  </div>

                  <div class="field is-grouped is-grouped-centered">
                    <p class="control">
                      <input id="login_submit-form" type='submit' class="button is-primary is-rounded" value="Signup" />
                    </p>
                  </div>
                </form>
              </div>
              <p class="has-text-grey">
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
