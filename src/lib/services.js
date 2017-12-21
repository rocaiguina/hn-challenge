export const getStory = () => {
  return fetch('https://hacker-news.firebaseio.com/v0/item/3410773.json')
    .then(res => res.json())
}

// const getComments = (id) => (
  
//   )
//   loadComments() = COMMENTS_REQUEST
//   async.forEachSeries([], (item, cb) => {
//     request.get('url?id=' + item, (err, res, body) => {
//       if (err) return cb(err);
//       getComments(body) = COMMENTS_SUCCESS
//       comments.push(body);
//       cb();
//     })
//   }, function (err) {
//     // done
//     console.log(comments);
//   })

  // function getComments (object) {

//   let allComments = object.comments;
//   let commentArray = object.story.comments;
//   let comments = [];
  
//   commentArray.forEach(function(key){
//     comments.push(allComments[key])
//   }) 
//   console.log(comments)
//   return comments.map(comment => <Comment key={comment.id} {...comment} />)
// }

// let keys = []
// let comments = []
//   for (var key in this.props.comments) {
//     if (this.props.comments.hasOwnProperty(key)) keys.push(key);
//   }
//   for (var i=0; i<keys.length; i++) { 
//     comments.push(this.props.comments[keys[i]])
//  }