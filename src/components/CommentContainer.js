import React from 'react';

const Comment = (props) => (
  <div className="comment padding-1h">
    <div className="comment__metadata">
      <span className="orange"><i className="fa fa-fw fa-user"></i>{props.by}</span>
      <span><i className="fa fa-fw fa-hourglass-o"></i>{props.time}</span>
    </div>
    <p>{props.text}</p>
    <CommentContainer comments={props.comments}/>
  </div>
)
 
class CommentContainer extends React.Component {
  render () {
  // let comments = getComments(this.props.comments)
  return console.log(this.props.comments)
  // return comments.map(comment => <Comment key={comment.id} {...comment} />) 
  }
}

export default CommentContainer
