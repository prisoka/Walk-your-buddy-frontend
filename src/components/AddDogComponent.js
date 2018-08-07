import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addDog } from '../redux/actions/userActions'

class AddDog extends Component {
  state = {
    dog_name:'',
    dog_age:'',
    dog_size:''
  }

  submitAddDogForm = (e) => {
    e.preventDefault()
    const {
      dog_name,
      dog_age,
      dog_size,
    } = this.state

    const { addDog, history } = this.props
    let newDog = {
      user_id: 1,
      dog_name: dog_name,
      dog_age: dog_age,
      dog_size: dog_size,
    }
    addDog(newDog, history)
  }

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  })

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Add Your Dog</h3>
              <div className="box">
                <figure className="avatar">
                  <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="dog_photo"/>
                </figure>
                <form
                  onSubmit={(e) => this.submitAddDogForm(e)}
                >
                  <div className="field">
                    <label className="label has-text-left" htmlFor="dog_name">Name</label>
                    <div className="control">
                      <input
                        id='dog_name'
                        name='dog_name'
                        className="input"
                        type="text"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label has-text-left" htmlFor="dog_age">Age</label>
                    <div className="control">
                      <input
                        id='dog_age'
                        name='dog_age'
                        className="input"
                        type="number"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label has-text-left" htmlFor="dog_size">Size</label>
                    <div className="control">
                      <div className="select is-primary">
                        <select
                            id='dog_size'
                            name="dog_size"
                            onChange={this.onChange}
                            required
                          >
                          <option>Select size</option>
                          <option>Small</option>
                          <option>Medium</option>
                          <option>Large</option>
                          <option>Giant</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="field is-grouped is-grouped-centered">
                    <p className="control">
                      <input id="login_submit-form" type='submit' className="button is-primary is-rounded" value="Add My Dog" />
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addDog
}, dispatch)

export default connect(null, mapDispatchToProps)(AddDog)
