import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function AlreadyAuth({children}){
  const userId = localStorage.getItem('userId');
  const loginStatus = localStorage.getItem('loginStatus');
  if(loginStatus === 'false'){
    return children;
  }
  let path = `/users/${userId}`;
  return <Navigate to = {path} />
}

export default AlreadyAuth;
