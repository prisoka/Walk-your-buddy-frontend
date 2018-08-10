import { combineReducers } from 'redux';
import userReducer from './userReducer'
import requestsReducer from './requestsReducer'
import dogsReducer from './dogsReducer'

export default combineReducers({
  user: userReducer,
  requests: requestsReducer,
  dogs: dogsReducer
})
