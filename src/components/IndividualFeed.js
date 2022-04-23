import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios'
import {updateLikes} from '../features/feed.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Comment from './Comment';

function IndividualFeed(props){
  const [commentInput,setCommentInput] = useState('');
  const {feed,id} = props;
  const dispatch = useDispatch();
  const commentsState = useSelector(state => state.comments.value);
  const [clicked,setClicked] = useState(false);
  let likesLength = feed.likes.length;
  let isLiked = feed.likes.includes(parseInt(id));
  function likeClickHandler(){
    axios.put(`http://localhost:3001/post/${feed.id}/updatelikes`, {
      "userId": id
    })
    .then((response) => {
      dispatch(updateLikes({likesArray: response.data, postId: feed.id}));
    })
  }

  function submitHandler(e){
    e.preventDefault();
    console.log(commentInput)
  }

  return (
    <li className="feed-list-item">
      <h2>{ feed.firstname.charAt(0).toUpperCase()}{feed.firstname.slice(1)} {feed.lastname.charAt(0).toUpperCase()}{feed.lastname.slice(1)}</h2>
      <div className="horizontal-line"></div>
      <div>{feed.title}</div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1rem'
      }}>
        <div style={{
          display: 'flex',
          columnGap: '0.4rem'
        }}>
           <div className={isLiked ? "like-comment liked" : "like-comment"}>{likesLength}</div>
           <button className={isLiked ? "like-comment liked" : "like-comment"} onClick={likeClickHandler}>Like</button>
        </div>
        <button className="like-comment" onClick={() => setClicked(!clicked)}>Comment</button>
      </div>
      {
        clicked ?
        <div style={{margin: '1rem 0 0 0'}}>
          <ul style={{
            margin: '1rem 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
             {
               commentsState.map(comment => {
                 if(parseInt(comment.postid) === parseInt(feed.id)){
                   return <Comment comment={comment} key={comment.id}/>
                 }
               })
             }
          </ul>
          <form style={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '0.2rem'
          }} onSubmit={submitHandler}>
             <AccountCircleIcon style={{
               height: '2.5rem',
               width: '2.5rem'
             }}/>
             <input type="text" placeholder="Write a comment..." value={commentInput} onChange={(e) => setCommentInput(e.target.value)} className="comment-input" style={{
               width: '100%',
               height: '2.5rem',
               backgroundColor: 'rgb(233, 233, 233)',
               border: 'none',
               borderRadius: '1.5rem',
               paddingLeft: '1rem',
               paddingRight: '1rem'
             }}></input>
          </form>
        </div>
        :
        null
      }
    </li>
  )
}
export default IndividualFeed;
