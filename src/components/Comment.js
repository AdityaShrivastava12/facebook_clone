import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Comment(props){
  const {comment} = props;
  return (
    <li style={{
      display: 'flex',
      alignItems: 'center'
    }}>
    <AccountCircleIcon style={{
      height: '2.5em',
      width: '2.5rem'
    }}/>
    <div style={{
      backgroundColor: 'rgb(233, 233, 233)',
      padding: '0.5rem',
      borderRadius: '1.5rem'
    }}>
        <p style={{
          fontSize: '14px',
          fontWeight: 'bolder',
          fontFamily: 'Helvetica'
        }}>{comment.firstname.charAt(0).toUpperCase()}{comment.firstname.slice(1)}{' '}
            {comment.lastname.charAt(0).toUpperCase()}{comment.lastname.slice(1)}</p>
        <p>{comment.content}</p>
    </div>
    </li>
  )
}
export default Comment;
