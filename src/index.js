import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
  entities: {
    stories: [
      {
        id: 1,
        by: 'user 1',
        descendants: 234,
        title: 'Title first article',
        comments: [1,2],
        score: 481,
        time: 325335277,
        url: 'http://google.com'
      }
    ],
    comments: [
      {
        id: 1,
        by: 'user 2',
        comments: [
          {
            id: 4,
            by: 'user 1',
            comments: [
              {
                id: 5,
                by: 'user 2',
                comments: [],
                text: "Comment Body",
                time: 1325340291,
              }
            ],
            text: "Comment Body",
            time: 1325340291,
          }
        ],
        text: "Comment Body",
        time: 1325340291,
      },
      {
        id: 2,
        by: 'user 3',
        comments: [],
        text: "Comment Body",
        time: 1325340291,
      },
      {
        id: 3,
        by: 'user 4',
        comments: [],
        text: "Comment Body",
        time: 1325340291,
      }
    ]
  }  
}

ReactDOM.render(<App story={state.entities.stories[0]} comments={state.entities.comments} />, document.getElementById('root'));
registerServiceWorker();
