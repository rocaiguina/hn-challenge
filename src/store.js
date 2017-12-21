import {createStore, applyMiddleware} from 'redux'
// import reducer from './reducers/comments.js'
import reducer from './reducers/story.js'
import thunk from 'redux-thunk'

export default createStore(
  reducer,
  applyMiddleware(thunk)
)
