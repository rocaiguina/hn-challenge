import React, { Component } from 'react';

const Comment = (props) => (
  <div className="comment padding-1h">
    <div className="comment__metadata">
      <span className="orange"><i className="fa fa-fw fa-user"></i>{props.by}</span>
      <span><i className="fa fa-fw fa-hourglass-o"></i>{props.time}</span>
    </div>
    <p>{props.text}</p>
  </div>
)
 
class CommentContainer extends Component {
  render () {
    return this.props.comments.map(comment => <Comment key={comment.id} {...comment} />) 
    //return null
  }
}

export default CommentContainer
