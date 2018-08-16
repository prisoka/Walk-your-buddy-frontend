export const FETCH_REQUESTS_SUCCESS = 'FETCH_REQUESTS_SUCCESS'
export const FETCH_REQUESTS_FAILED = 'FETCH_REQUESTS_FAILED'

export const REQUEST_PENDING = 'REQUEST_PENDING'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_FAILED = 'REQUEST_FAILED'

export const ACCEPT_REQUEST_PENDING = 'ACCEPT_REQUEST_PENDING'
export const ACCEPT_REQUEST_SUCCESS = 'ACCEPT_REQUEST_SUCCESS'
export const ACCEPT_REQUEST_FAILED = 'ACCEPT_REQUEST_FAILED'

const BASE_URL = 'http://localhost:3000/api'

export const fetchRequests = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/requests`)
      let requests = await response.json()
      dispatch({
        type: FETCH_REQUESTS_SUCCESS,
        payload: requests
      })
    } catch(err) {
      dispatch({
        type: FETCH_REQUESTS_FAILED,
        payload: err
      })
    }
  }
}

export const requestWalk = (newRequest, history) => {
  return async(dispatch) => {
    try {
      dispatch({type: REQUEST_PENDING})
      let response = await fetch(`${BASE_URL}/requests`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': 'Authorization, Content-Type'
        },
        credentials: 'include',
        body: JSON.stringify(newRequest)
      })
      .then ((response) => {
        if (response.status < 300) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      let responseObject = await response.json()
      dispatch({
        type: REQUEST_SUCCESS,
        payload: responseObject
      })
      history.push('/user_index')
    } catch(err) {
      dispatch({
        type: REQUEST_FAILED,
        payload: err
      })
    }
  }
}

export const walkerAcceptsReq = (acceptedRequest, history) => {
  return async(dispatch) => {
    try {
      dispatch({type: ACCEPT_REQUEST_PENDING})

      let response = await fetch(`${BASE_URL}/requests/${acceptedRequest.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': 'Authorization, Content-Type'
        },
        credentials: 'include',
        body: JSON.stringify(acceptedRequest)
      })
      .then ((response) => {
        if (response.status < 300) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      let responseObject = await response.json()
      dispatch({
        type: ACCEPT_REQUEST_SUCCESS,
        payload: responseObject
      })
    } catch(err) {
      dispatch({
        type: ACCEPT_REQUEST_FAILED,
        payload: err
      })
    }
  }
}
