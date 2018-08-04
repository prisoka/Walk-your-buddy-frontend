import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userSignup } from '../redux/actions/userActions'
import { Link } from 'react-router-dom'

class WalkerSignUp extends Component {
  state = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    address_one: '',
    address_two: '',
    zip: ''
  }

  createNewUser = (e) => {
    e.preventDefault()
    const {
      email,
      password,
      first_name,
      last_name,
      phone_number,
      address_one,
      address_two,
      zip
    } = this.state
    const { userSignup, history } = this.props
    let newUser = {
      user_type:'walker',
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      address_one: address_one,
      address_two: address_two,
      zip: zip
    }
    userSignup(newUser, history)
  }

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  })

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-half is-offset-one-quarter">
              <h3 className="title has-text-grey">Signup</h3>
              <div className="box">
                <form
                  id="create_user_form"
                  onSubmit={(e) => this.createNewUser(e)}
                >
                  <div className="field">
                    <label className="label has-text-left" htmlFor="email">Email</label>
                    <p className="control has-icons-left has-icons-right">
                      <input
                        id='create_email_field'
                        name='email'
                        className="input"
                        type="email"
                        pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                        onChange={this.onChange}
                        required
                      />
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
                      <input
                        id='password'
                        name='password'
                        className="input"
                        type="password"
                        minLength="8"
                        onChange={this.onChange}
                        required
                      />
                      <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>

                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <label className="label has-text-left" htmlFor="first_name">First name</label>
                      <input
                        id='first_name'
                        name='first_name'
                        className="input"
                        type="text"
                        onChange={this.onChange}
                        required
                      />
                    </p>
                  </div>

                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <label className="label has-text-left" htmlFor="last_name">Last name</label>
                      <input
                        id='last_name'
                        name='last_name'
                        className="input"
                        type="text"
                        onChange={this.onChange}
                        required
                      />
                    </p>
                  </div>

                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <label className="label has-text-left" htmlFor="phone">Phone number</label>
                      <input
                        id='phone_number'
                        name='phone_number'
                        className="input"
                        type="number"
                        onChange={this.onChange}
                        required
                      />
                    </p>
                  </div>

                  <div className="field">
                    <label className="label has-text-left" htmlFor="address1">Address Line1</label>
                    <div className="control">
                      <input
                        id="address_one"
                        name="address_one"
                        type="text"
                        placeholder=""
                        className="input"
                        onChange={this.onChange}
                      />
                      <span className="help">Street address, P.O. box, company name, c/o</span>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label has-text-left" htmlFor="Address2">Address Line2</label>
                    <div className="control">
                      <input
                        id="address_two"
                        name="address_two"
                        type="text"
                        placeholder=""
                        className="input"
                        onChange={this.onChange}
                      />
                      <span className="help">Apartment, suite , unit, building, floor, etc.</span>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label has-text-left" htmlFor="zip">Zip/Postal code</label>
                    <div className="control">
                      <input
                        id="zip"
                        name="zip"
                        type="number"
                        placeholder="zip or postal code"
                        className="input"
                        onChange={this.onChange}
                        required
                      />
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
                Have you been here before? &nbsp;·&nbsp;
                <Link to='/login'>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  userSignup
}, dispatch)

export default connect(null, mapDispatchToProps)(WalkerSignUp)
