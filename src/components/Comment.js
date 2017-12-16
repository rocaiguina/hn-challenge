import React from 'react';
import CommentsContainer from './CommentsContainer.js';

export default (props) => (
  
    <div className="comment padding-1h">
      <div className="comment__metadata">
        <span className="orange"><i className="fa fa-fw fa-user"></i>{props.by}</span>
        <span><i className="fa fa-fw fa-hourglass-o"></i>{props.time}</span>
      </div>
      <p>{props.text}</p>
      <CommentsContainer comments={props.comments}/>
    </div>
    
  
)