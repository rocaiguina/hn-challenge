import React, {Component} from 'react'
import CommentContainer from './CommentContainer';
import {connect} from 'react-redux'
import { getComments, getStory } from '../actions'

class Story extends Component {
  componentDidMount() {
    this.props.fetchStory(3410773)
      .then(() => {
        this.props.fetchComments(this.props.story.kids)
      })
  }
  render () {
    return (    
      <div className="story">
      <div className="story__header">
        <h1 className="story__title">{this.props.story.title}</h1>
        <div className="story__metadata margin-1v">
          <span className="padding-1h dark-orange-bg">{this.props.story.score}</span>
          <span>{this.props.story.by}</span>
          <span>{this.props.story.time}</span>
          <span><i className="fa fa-fw fa-comment-o"></i>{this.props.story.descendants}</span>
        </div>
        <div className="story__links margin-1v">
          <span className="truncate"><i className="fa fa-fw fa-external-link"></i>{this.props.story.url}</span>
        </div>
      </div>
      <div className="story__comments">
        <CommentContainer comments={this.props.comments} />
      </div>
    </div>
    )
  } 
}

function mapStateToProps (state) {
  return {
    story: state.story,
    comments: state.comment.items
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchStory: (id) => dispatch(getStory(id)),
    fetchComments: (ids) => dispatch(getComments(ids))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Story)