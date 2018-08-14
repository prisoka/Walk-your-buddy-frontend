import {
  FETCH_REQUESTS_SUCCESS,
  FETCH_REQUESTS_FAILED,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
  ACCEPT_REQUEST_PENDING,
  ACCEPT_REQUEST_SUCCESS,
  ACCEPT_REQUEST_FAILED,
}
from '../actions/requestsActions'

let initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REQUESTS_SUCCESS:
      return [...payload]
    case FETCH_REQUESTS_FAILED:
      return [...payload]
    case REQUEST_PENDING:
      return [...state]
    case REQUEST_SUCCESS:
      return [...state]
    case REQUEST_FAILED:
      return [payload]
    case ACCEPT_REQUEST_PENDING:
      return [...state]
    case ACCEPT_REQUEST_SUCCESS:
      const newState = state.map((request) => {
        if(request.id === payload.id){
          return payload
        } else {
          return request
        }
      })
      return newState
    case ACCEPT_REQUEST_FAILED:
      return [payload]
    default:
      return state
  }
}
