import {
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE
} from '../actions'

const initialState = {
  isFetching: null,
  items: [{
    type: null,
    text: null,
    kids: [],
    parent: null,
    by: null,
    time: null
  }],
  error: null
}

export default function comment (state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENT_REQUEST:
      return ({
        ...state,
        isFetching: true,
        error: null
      })
    case FETCH_COMMENT_SUCCESS:
      return ({
        ...state,
        isFetching: false,
        items: action.data
      })
    case FETCH_COMMENT_FAILURE:
      return ({
        ...state,
        isFetching: false,
       error: action.error
      })
    default:
      return state
  }
}