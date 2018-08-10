import {
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_FAILED,
  ADD_DOG_PENDING,
  ADD_DOG_SUCCESS,
  ADD_DOG_FAILED,
}
from '../actions/dogsActions'

let initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DOGS_SUCCESS:
      return [...payload]
    case FETCH_DOGS_FAILED:
      return [payload]
    case ADD_DOG_PENDING:
      return [...state]
    case ADD_DOG_SUCCESS:
      return [...state, payload]
    case ADD_DOG_FAILED:
      return [payload]
    default:
      return state
  }
}
