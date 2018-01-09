import {
  FETCH_STORY_REQUEST,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_FAILURE
} from '../actions'

const initialState = {
  isFetching: null,
  type: null,
  text: null,
  kids: [],
  parent: null,
  by: null,
  time: null,
  error: null
}

export default function story (state = initialState, action) {
  switch(action.type) {
    case FETCH_STORY_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case FETCH_STORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.data
      }
    case FETCH_STORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}