import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addDog } from '../redux/actions/dogsActions'

class AddDog extends Component {
  state = {
    dog_name:'',
    dog_age:'',
    dog_size:'',
    dog_photo: null,
    imagePreviewUrl: null
  }

  photoSelectedHandler = (e) => {
    let file = e.target.files[0];

    if (file) {
      let reader = new FileReader();

      reader.onload = () => {
        this.setState({
          dog_photo: file,
          imagePreviewUrl: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
  }

  submitAddDogForm = (e) => {
    e.preventDefault()
    const {
      dog_name,
      dog_age,
      dog_size,
      dog_photo
    } = this.state

    const { addDog, history } = this.props
    let newDog = {
      dog_name: dog_name,
      dog_age: dog_age,
      dog_size: dog_size,
      dog_photo: dog_photo
    }
    addDog(newDog, history)
  }

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  })

  render() {
    const { imagePreviewUrl } = this.state

    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Add Your Dog</h3>
              <div className="box">
                <figure className="avatar">
                  <img
                    className="is-rounded"
                    src={ imagePreviewUrl ? imagePreviewUrl : "https://bulma.io/images/placeholders/128x128.png" }
                    alt="dog_photo"
                  />
                </figure>
                <form
                  id="create_dog_form"
                  onSubmit={(e) => this.submitAddDogForm(e)}
                >
                  <div>
                    <div className="file is-small is-centered">
                      <label className="file-label">
                        <input
                          className="file-input"
                          type="file"
                          name="dog_photo"
                          onChange={this.photoSelectedHandler}
                        />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="fas fa-upload"></i>
                          </span>
                          <span className="file-label">
                            Choose a photo…
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>

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
                        min="0"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label has-text-left" htmlFor="dog_size">Size</label>
                    <div className="control">
                      <div className="select is-warning">
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
                      <input id="add_dog_submit_btn" type='submit' className="button is-warning is-rounded" value="Add My Dog" />
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
