import {getStory} from '../lib/services.js'

const initState = {
  story: {
  }
}

const GET_STORY = 'GET_STORY'

export const fetchStory = () => {
  return (dispatch) =>{
    getStory()
      .then(story => dispatch(loadStory(story)))
  }
}

export const loadStory = (story) => ({type: GET_STORY, payload: story})

export default (state = initState, action) => {
  switch (action.type) {
    case GET_STORY:
      return {...state, story: action.payload}
    default:
      return state;
  }
}