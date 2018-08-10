import {
  FETCH_REQUESTS_SUCCESS,
  FETCH_REQUESTS_FAILED,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
}
from '../actions/requestsActions'

let initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REQUESTS_SUCCESS:
      return {...payload}
    case FETCH_REQUESTS_FAILED:
      return {payload}
    case REQUEST_PENDING:
      return {...state}
    case REQUEST_SUCCESS:
      return {...state}
    case REQUEST_FAILED:
      return {payload}
    default:
      return state
  }
}
