import reducer from './commentsContainer';

describe ('CommentsContainer Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, {type:'ANYTHING'})
    expect(result).toBeDefined()
  })

  test ('gets comments', () => {
    const startState = {
      comments: []
    }

    const expectedState = {
      comments: [
        { id: 1,
          by: 'user 1',
          comments: [],
          text: "Comment Body",
          time: 1325340291,
        }
      ]
    }

    const action = {
      type:'GET_COMMENTS', 
      payload: {
          id: 1,
          by: 'user 1',
          comments: [],
          text: "Comment Body",
          time: 1325340291
        }
      }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })
})
