import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
            <div>
              <span>
                <i className="fa fa-angle-left"></i>
              </span>
            </div>
            <div className="header__icons--right">
              <span className="padding-1h">
                <i className="fa fa-share-square-o"></i>
              </span>
              <span className="padding-1h">
                <i className="fa fa-newspaper-o"></i>
              </span>
              <span className="padding-1h">
                <i className="fa fa-ellipsis-v"></i>
              </span>
            </div>
        </header>
        
        <div className="story">
          <div className="story__header">
            <h1 className="story__title">Stop whining and start hiring remote workers</h1>
            <div className="story__metadata margin-1v">
              <span className="padding-1h dark-orange-bg">481</span>
              <span className="padding-1h">jodosha</span>
              <span className="padding-1h">2 hrs</span>
              <span className="padding-1h"><i className="fa fa-fw fa-comment-o"></i>22</span>
            </div>
            <div className="story__links margin-1v">
              <span className="truncate"><i className="fa fa-fw fa-external-link"></i>http://37signals.com/svn/posts/3064-stop-whining-and-start-hiring-remote-workers</span>
            </div>
          </div>
          <div className="story__comments">
          
          {this.props.item.comments.map(comment => (
            <div className="comment padding-1h" key={comment.id}>
              <div className="comment__metadata">
                <span className="orange"><i className="fa fa-fw fa-user"></i>{comment.by}</span>
                <span className="padding-1h"><i className="fa fa-fw fa-hourglass-o"></i>{comment.time}</span>
              </div>
              <p className="padding-1h">{comment.text}</p>
              {comment.comments.map (comment => (
                <div className="comment__reply" key={comment.id}>
                <div className="comment__metadata padding-1h">
                  <span className="orange"><i className="fa fa-fw fa-user"></i>{comment.by}</span>
                  <span className="padding-1h"><i className="fa fa-fw fa-hourglass-o"></i>{comment.time}</span>
                </div>
                <p className="padding-1h">{comment.text}</p>
                {comment.comments.map (comment => (
                <div className="comment__reply" key={comment.id}>
                <div className="comment__metadata padding-1h">
                  <span className="orange"><i className="fa fa-fw fa-user"></i>{comment.by}</span>
                  <span className="padding-1h"><i className="fa fa-fw fa-hourglass-o"></i>{comment.time}</span>
                </div>
                <p className="padding-1h">{comment.text}</p>
              </div>
              ))}
              </div>
              ))}
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
