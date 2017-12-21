import React, {Component} from 'react'
// import CommentContainer from './CommentContainer.js';
import {connect} from 'react-redux'
import {fetchStory} from '../reducers/story.js'

class Story extends Component {
  componentDidMount() {
    this.props.fetchStory()
  }
  render () {
    return (    
      <div className="story">
      {this.props.comments}
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
        {/* <CommentContainer comments= {this.props.story.comments} /> */}
        {this.props.story.comments}
      </div>
    </div>
    )
  } 
}

export default connect(
  (state) => ({story: state.story}),
  {fetchStory}
)(Story)