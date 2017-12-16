import React from 'react';
import Comment from './Comment.js';

export default (props) => (
 
    props.comments !== undefined && 
        props.comments.map(comment => <Comment key={comment.id} {...comment} />)
   
)