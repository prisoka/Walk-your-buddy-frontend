import { combineReducers } from 'redux';
import userReducer from './userReducer'
import requestsReducer from './requestsReducer'

export default combineReducers({
  user: userReducer,
  requests: requestsReducer
})
