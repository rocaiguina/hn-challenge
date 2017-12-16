const initState = {
  comments: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'GET_COMMENTS':
      return {...state, comments: state.comments.concat(action.payload)}
    default:
      return state;
  }
}