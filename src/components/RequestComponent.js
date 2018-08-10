import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestWalk } from '../redux/actions/requestsActions'

class RequestWalk extends Component {

  state = {
    dog_id:'',
    request_date:'',
    request_time:''
  }

  submitReqForm = (e) => {
    e.preventDefault()
    const { dog_id, request_date, request_time } = this.state
    const { requestWalk, history } = this.props
    let newRequest = {
      dog_id: dog_id,
      request_date: request_date,
      request_time: request_time,
    }
    requestWalk(newRequest, history)
  }
  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  })

  render() {
    const { dogs } = this.props
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Request A Walk!</h3>
              <div className="box">
                <form
                  id="request_form"
                  onSubmit={(e) => this.submitReqForm(e)}
                >

                  <div className="field has-addons">
                    <div className="control is-expanded">
                      <div className="select is-fullwidth">
                        <select
                          name="dog_id"
                          id="dog_id"
                          onChange={this.onChange}
                          required
                        >
                          <option value="">Select dog</option>
                          {
                            dogs.map((dog) => (
                              <option
                                key={request.id}
                                dog={dog_name}
                              >
                              </option>
                            ))
                          }

                        </select>
                      </div>
                    </div>
                    {/* <div className="control">
                      <button type="submit" className="button is-warning">Choose</button>
                    </div> */}
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
                      <span className="help">hr:min am/pm</span>
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

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  requestWalk
}, dispatch)

export default connect(mapStateToPropss, mapDispatchToProps)(RequestWalk)
