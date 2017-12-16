import reducer from './comments';

describe ('Comments Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, {type:'ANYTHING'})
    expect(result).toBeDefined()
  })

  test ('gets nested comments', () => {
    const startState = {
      item: {
        by: 'jodosha', 
        descendants: 234, 
        id: 1, 
        comments: [],
        score: 481,
        time: 325335277,
        type: 'story',
        title: 'Stop whining and start hiring remote workers',
        url: 'http://37signals.com/svn/posts/3064-stop-whining-and'
      }      
    }

    const expectedState = {
      item: {
          by: 'jodosha', 
          descendants: 234, 
          id: 1, 
          comments: [
            {
            by: 'reply',
            id: 10,
            comments: [],
            parent: 4,
            text: "text",
            time: 1325340291,
            type: 'comment'
            }
          ],
          score: 481,
          time: 325335277,
          type: 'story',
          title: 'Stop whining and start hiring remote workers',
          url: 'http://37signals.com/svn/posts/3064-stop-whining-and-'
      }
    }
    const action = {
      type:'GET_COMMENTS', 
      payload: {
          comments: [
            {
            by: 'reply',
            id: 10,
            comments: [],
            parent: 4,
            text: "text",
            time: 1325340291,
            type: 'comment'
            }
          ]
        }
      }
    const result = reducer(startState, action)
  })

})
