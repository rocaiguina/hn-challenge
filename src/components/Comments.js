import React from 'react';

export default (props) => (
  <div className="story__comments">
    {props.item.comments.map(comment => (
      <div className="comment padding-1h" key={comment.id}>
        <div className="comment__metadata">
          <span className="orange"><i className="fa fa-fw fa-user"></i>{comment.by}</span>
          <span><i className="fa fa-fw fa-hourglass-o"></i>{comment.time}</span>
        </div>
        <p>{comment.text}</p>
        {comment.comments.map (comment => (
          <div className="comment__reply" key={comment.id}>
          <div className="comment__metadata padding-1h">
            <span className="orange"><i className="fa fa-fw fa-user"></i>{comment.by}</span>
            <span><i className="fa fa-fw fa-hourglass-o"></i>{comment.time}</span>
          </div>
          <p>{comment.text}</p>
          {comment.comments.map (comment => (
          <div className="comment__reply" key={comment.id}>
          <div className="comment__metadata padding-1h">
            <span className="orange"><i className="fa fa-fw fa-user"></i>{comment.by}</span>
            <span><i className="fa fa-fw fa-hourglass-o"></i>{comment.time}</span>
          </div>
          <p>{comment.text}</p>
        </div>
        ))}
        </div>
        ))}
      </div>
    ))}
  </div>
)