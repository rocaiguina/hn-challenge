import each from 'async/each'

export const FETCH_COMMENT_REQUEST = 'FETCH_COMMENT_REQUEST'
export function commentRequest () {
  return {
    type: FETCH_COMMENT_REQUEST
  }
}

export const FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS'
export function commentSuccess (data) {
  return {
    type: FETCH_COMMENT_SUCCESS,
    data
  }
}

export const FETCH_COMMENT_FAILURE = 'FETCH_COMMENT_FAILURE'
export function commentFailure (error) {
  return {
    type: FETCH_COMMENT_FAILURE,
    error
  }
}

/**
 * Given an id, search for a HN story
 * @param {Number} id 
 */
export function getComments (ids) {
  return function (dispatch) {
    dispatch(commentRequest())
    let comments = []
    each(ids, function (id, callback) {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(res => res.json())
        .then(data => {
          comments.push(data)
          callback()
        })
        .catch(error => {
          callback(error)
        })
    }, function (error) {
      if (error) {
        dispatch(commentFailure(error))
      }
      dispatch(commentSuccess(comments))
    })
  }
}

export const FETCH_STORY_REQUEST = 'fetch_story_request'
export function storyRequest () {
  return {
    type: FETCH_STORY_REQUEST
  }
}

export const FETCH_STORY_SUCCESS = 'fetch_story_success'
export function storySuccess (data) {
  return {
    type: FETCH_STORY_SUCCESS,
    data
  }
}

export const FETCH_STORY_FAILURE = 'fetch_story_failure'
export function storyFailure (error) {
  return {
    type: FETCH_STORY_FAILURE,
    error
  }
}

export function getStory (id) {
  return function (dispatch) {
    dispatch(storyRequest())
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(res => res.json())
      .then(data => {
        dispatch(storySuccess(data))
      })
      .catch(error => {
        dispatch(storyFailure(error))
      })
  }
}