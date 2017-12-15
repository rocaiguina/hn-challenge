import React from 'react';

const Comment = ({by, time, text, comments}) => (
  <div className="comment padding-1h">
    <div className="comment__metadata">
      <span className="orange"><i className="fa fa-fw fa-user"></i>{by}</span>
      <span><i className="fa fa-fw fa-hourglass-o"></i>{time}</span>
    </div>
    <p>{text}</p>
    {comments.map(comment => <Comment key={comment.id} {...comment} />)}
  </div>
)

export default (props) => (
  <div className="story__comments">
    {props.comments.map(comment => <Comment key={comment.id} {...comment} />)}
  </div>
)