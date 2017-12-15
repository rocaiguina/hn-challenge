import React from 'react'
import Comments from './Comments.js';

export default (props) => (
  <div className="story">
    <div className="story__header">
      <h1 className="story__title">{props.item.title}</h1>
      <div className="story__metadata margin-1v">
        <span className="padding-1h dark-orange-bg">{props.item.score}</span>
        <span>{props.item.by}</span>
        <span>{props.item.time}</span>
        <span><i className="fa fa-fw fa-comment-o"></i>{props.item.descendants}</span>
      </div>
      <div className="story__links margin-1v">
        <span className="truncate"><i className="fa fa-fw fa-external-link"></i>{props.item.url}</span>
      </div>
    </div>
    <Comments comments={props.item.comments} />
  </div>
  
  
    
)