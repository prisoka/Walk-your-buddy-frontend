import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  USER_SIGNUP_PENDING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT_PENDING,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILED
}
from '../actions/userActions'

let initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_SUCCESS:
      return {...payload}
    case FETCH_USER_FAILED:
      return {payload}
    case USER_SIGNUP_PENDING:
      return {...state}
    case USER_SIGNUP_SUCCESS:
      return {...payload}
    case USER_SIGNUP_FAILED:
      return {payload}
    case USER_LOGIN_PENDING:
      return {...state}
    case USER_LOGIN_SUCCESS:
      return {...payload}
    case USER_LOGIN_FAILED:
      return {payload}
    case USER_LOGOUT_PENDING:
      return {...state}
    case USER_LOGOUT_SUCCESS:
      return {}
    case USER_LOGOUT_FAILED:
      return {payload}
    default:
      return state
  }
}
