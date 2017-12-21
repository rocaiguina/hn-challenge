
const initState = {
  comments : {
    byId : {
      1 : {
        id: 1,
        user: "user 1",
        comments: [3],
        parent: 4,
        text: "comment content on the go",
        time: 1325340291,
      },
      2 : {
        id: 2,
        user: "user 2",
        comments: [],
        parent : 4,
        text: "comment content on the go",
        time : 1325340291,
      },
      3 : {
        id : 3,
        user : "edw519",
        comments : [],
        parent : 1,
        text : "<i>Everything we do to manage a business consisting mainly of remote employees is something anyone else could do too.</i><p>I would modify 'anyone else' to 'anyone else enlightened enough'. Big difference.<p>It's still amazing how many managers/leaders are so bad at managing/leading that all the tools in the world wouldn't make a bit of difference. You know who they are, the people for whom:<p><pre><code>  perceived activity = progress\n  meetings = progress\n  being there = progress\n  lines of code = progress\n  check marks = completion\n  social skills = competence\n  perception = reality\n  what's on the surface = what's underneath\n  # of tasks completed = an acceptable metric\n  successful testing = quality software\n  smiling customers = satisfaction\n  90% complete = only 10% more to go\n</code></pre>\nGood managers know better. So they can take advantage of OP's tools.<p>The technology for managing remotely is clearly ahead of the people who would most benefit from it. I look forward the the day when managers catch up and 'get it'.",
        time : 1325340291,
      }
    },
    allIds : [1, 2, 3, 4]
  }
  // stories: {
  //   byId : {
  //     4 : {
  //       id : 4,
  //       user : 'jodosha',
  //       comments : [1,2],
  //       descendants : 3,
  //       score : 1,
  //       time : 1325335277,
  //       title : 'Stop whining and start hiring remote workers',
  //       url : 'http://37signals.com/svn/posts/3064-stop-whining-and-start-hiring-remote-workers'
  //     }
  //   },
  //   allIds : []
  // }
}


export default (state = initState, action) => {
  switch (action.type) {
    case 'GET_COMMENTS':
      return {...state, comments: state.comments.concat(action.payload)}
    default:
      return state;
  }
}

