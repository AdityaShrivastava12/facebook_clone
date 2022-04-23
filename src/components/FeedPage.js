import React,{useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {getFeed,updateFeed} from '../features/feed'
import Header from './Header.js'
import LeftSideBar from './LeftSideBar.js';
import RightSideBar from './RightSideBar.js';
import IndividualFeed from './IndividualFeed.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {loginR} from '../features/user';
import {getComments} from '../features/comments.js';
import {updatePostInput,resetPostInput} from '../features/addpost.js';



function FeedPage(){
  const dispatch = useDispatch();
  const feedState = useSelector((state) => state.feed.value);
  const formInput = useSelector(state => state.addPostInput.value);
  const {id} = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`)
      .then((response) => {
        // console.log(response.data);
        dispatch(loginR(response.data));
      })
    axios.get('http://localhost:3001/comments').then((response) => {dispatch(getComments(response.data))})
  },[])
  const userState = useSelector(state => state.user.value);
  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}/feed`)
      .then((response) => {
        // console.log(response.data);
        dispatch(getFeed(response.data));
        // console.log(feedState);
      });

      dispatch(resetPostInput());
  },[])

  function submitHandler(e){
    e.preventDefault();
    if(!formInput) return ;
    axios.post(`http://localhost:3001/users/${id}/post`,{
      "title": formInput
    })
    .then(response => {
      console.log(response.data);
      dispatch(updateFeed(response.data));
      dispatch(resetPostInput());
    })
  }

  return (
    <div className="feedpage-container">
      <Header userState = {userState}/>
      <main>
        <LeftSideBar />
        <section className="middle-section">
          <form className="add-post-form" onSubmit={submitHandler}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '0.5rem',
              width: '100%'
            }}>
            <AccountCircleIcon style={{
              height: '50px',
              width: '50px'
            }}/>
            <input type="text" placeholder="What's on your mind" className="mind-input"
             value={formInput} onChange={(e) => dispatch(updatePostInput(e.target.value))}/>
            </div>
            <button className="add-post-button"> Add Post</button>
          </form>
          <ul>
            {
              feedState.map((feed,index) => {
                return <IndividualFeed feed={feed} key={feed.id} id={id}/>
              })
            }
          </ul>
        </section>
        <RightSideBar id={id}/>
      </main>
    </div>
  )
}
export default FeedPage;
