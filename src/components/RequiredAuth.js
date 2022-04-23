import React from 'react';
import {Navigate} from 'react-router-dom';

function RequiredAuth({children}){
  const loginStatus = localStorage.getItem('loginStatus');
  if(loginStatus === 'false'){
    return <Navigate to="/" />
  }

  return children;
}

export default RequiredAuth;
