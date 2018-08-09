import {
  USER_SIGNUP_PENDING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT_PENDING,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILED,
  ADD_DOG_PENDING,
  ADD_DOG_SUCCESS,
  ADD_DOG_FAILED,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
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
    case USER_LOGIN_PENDING:
      return {...state}
    case USER_LOGIN_SUCCESS:
      return {...state}
    case USER_LOGIN_FAILED:
      return {payload}
    case USER_LOGOUT_PENDING:
      return {...state}
    case USER_LOGOUT_SUCCESS:
      return {...state}
    case USER_LOGOUT_FAILED:
      return {payload}
    case ADD_DOG_PENDING:
      return {...state}
    case ADD_DOG_SUCCESS:
      return {...state, payload}
    case ADD_DOG_FAILED:
      return {payload}
    case REQUEST_PENDING:
      return {...state}
    case REQUEST_SUCCESS:
      return {...state, payload}
    case REQUEST_FAILED:
      return {payload}
    default:
      return state
  }
}
