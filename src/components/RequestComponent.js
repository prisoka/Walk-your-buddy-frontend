import React, { Component } from 'react';

class RequestWalk extends Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Request A Walk!</h3>
              <div className="box">
                <form
                  id="request_form"
                  onSubmit={(e) => this.SOMEFUNTCION(e)}
                >

                  <div className="field has-addons">
                    <div className="control is-expanded">
                      <div className="select is-fullwidth">
                        <select name="dog_name" id="dog_name">
                          <option value="">Select dog</option>
                          <option value="Argentina">Aquila</option>
                          <option value="Brazil">Bacon</option>
                          <option value="Chile">Pipoca</option>
                        </select>
                      </div>
                    </div>
                    <div className="control">
                      <button type="submit" className="button is-warning">Choose</button>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label has-text-left" htmlFor="request_date">When?</label>
                    <div className="control">
                      <input
                        id='request_date'
                        name='request_date'
                        className="input"
                        type="date"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label has-text-left" htmlFor="request_time">At what time?</label>
                    <div className="control">
                      <input
                        id='request_time'
                        name='request_time'
                        className="input"
                        type="time"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="field is-grouped is-grouped-centered">
                    <p className="control">
                      <input id="request_walk_btn" type='submit' className="button is-warning is-rounded" value="Request" />
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default RequestWalk;
