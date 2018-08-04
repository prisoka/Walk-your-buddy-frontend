import {
  USER_SIGNUP_PENDING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
}
from '../actions/userActions'

let initialState = ''

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP_PENDING:
      return {...state}
    case USER_SIGNUP_SUCCESS:
      return {...state}
    case USER_SIGNUP_FAILED:
      return {payload}
    default:
      return state
  }
}
