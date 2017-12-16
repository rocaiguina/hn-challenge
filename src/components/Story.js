import React from 'react'
import CommentsContainer from './CommentsContainer.js';

export default (props) => (
  <div className="story">
    <div className="story__header">
      <h1 className="story__title">{props.story.title}</h1>
      <div className="story__metadata margin-1v">
        <span className="padding-1h dark-orange-bg">{props.story.score}</span>
        <span>{props.story.by}</span>
        <span>{props.story.time}</span>
        <span><i className="fa fa-fw fa-comment-o"></i>{props.story.descendants}</span>
      </div>
      <div className="story__links margin-1v">
        <span className="truncate"><i className="fa fa-fw fa-external-link"></i>{props.story.url}</span>
      </div>
    </div>
    <div className="story__comments">
      <CommentsContainer comments={props.comments} />
    </div>
  </div>
  
  
    
)