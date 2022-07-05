import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function RequiredAuth({children}){
  const loginStatus = useSelector(state => {console.log(state.loginStatus.value); return state.loginStatus.value});
  if(loginStatus === false){
    return <Navigate to="/" />
  }

  return children;
}

export default RequiredAuth;
