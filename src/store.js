
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './redux/reducers/rootReducer'

const store = () => {
  return createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
  )
}

let newStore = store()

export default newStore
