import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import {loadFriends} from '../features/friends.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function RightSideBar(props){
  const dispatch = useDispatch();
  const {id} = props
  // const {useSelector(state => state.user.value);
  const friends = useSelector(state => state.friends.value);

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}/friends`)
      .then((response) => {
        dispatch(loadFriends(response.data));
      })
      .catch(e => console.log(e));

  },[])
  return (
    <div className="right-side-bar">
     <ul>
       <h3 style={{
         color: 'rgb(64, 62, 62)',
         fontFamily: 'Arial'
       }}>Contacts</h3>
       <>
       {
         friends.length > 0 ?
         friends.map((friend,index) => {
           return (
             <li style={{
               display: 'flex',
               alignItems: 'center',
               columnGap: '0.5rem'
             }} key={index}>
             <AccountCircleIcon style={{
               width: '36px',
               height: '36px'
             }}/>
             <p style={{fontFamily: 'Arial', fontSize: '14px'}}>{friend.firstname.charAt(0).toUpperCase()}{friend.firstname.slice(1)}{' '}{friend.lastname.charAt(0).toUpperCase()}{friend.lastname.slice(1)}</p>
             </li>
           )
         })
         :
         null
       }
       </>
     </ul>
    </div>
  )
}
export default RightSideBar;
