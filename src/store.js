import {createStore, applyMiddleware} from 'redux'

// IMPORT REDUCERS
import reducer  from './reducers'

import thunk from 'redux-thunk'

export default createStore(
  reducer,
  applyMiddleware(thunk)
)
