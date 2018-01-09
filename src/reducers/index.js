import { combineReducers } from 'redux'
import comment from './comment'
import story from './story'

export default combineReducers({
  comment,
  story
})