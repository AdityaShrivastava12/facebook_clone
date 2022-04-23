import React,{useEffect} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {login} from '../apiCalls.js';
import {loginR} from '../features/user';
import {useDispatch,useSelector} from 'react-redux';
import {resetForm} from '../features/signupFormValues.js';
import {updateLoginEmail,updateLoginPassword} from '../features/loginFormValues.js';
import {loginError,loginSuccess} from '../features/login.js';
import {logIn} from '../features/loginStatus.js';

function LoginPage(){
  let navigate = useNavigate();
  const {email,password} = useSelector(state => state.loginForm.value);
  const {error,success} = useSelector(state => state.login.value);
  const user = useSelector(state => state.user.value);
  const isLoggedIn = useSelector(state => state.loginStatus.value);
  let dispatch = useDispatch();

  async function clickHandler(e){
    e.preventDefault();
    let response = await login(email,password);
    console.log(response);
    if(response.hasOwnProperty('error')){
      dispatch(loginError(response.error));
    }
    if(response.hasOwnProperty('success')){
      dispatch(loginSuccess(response.success));
      dispatch(loginR(response.user));
      dispatch(logIn());

    }

    // navigate(`/user/${userId}`);
    // let user = await axios.get(`https://facebook-backend-aditya.herokuapp.com/users/${userId}`,{
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    // console.log(user.data);
    // let userObj = user.data[0];
    // dispatch(loginR(userObj));
  }

  useEffect(() => {
    if(isLoggedIn){
      console.log(user);

      let userId = user.id;
      navigate(`/users/${userId}`, {replace: true});
    }
  },[isLoggedIn]);

  function newAccountClickHandler(){
    dispatch(resetForm({firstname: '', lastname: '',email: '',password: '',dob: '',gender: ''}));
  }

  return (
    <div className="login-page-container">
      <div className="logo-heading-container login-page-child">
        <img className="facebook-logo" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"/>
        <h2 className="facebook-heading">Facebook helps you connect and share with the people in your life.</h2>
      </div>
      <div className="login-form-and-message">
        <div className="login-form-container login-page-child">
          <form className="login-form">
            <input type="email" placeholder="Email Address" className="login-form-child input-email" value={email} onChange={e => {dispatch(updateLoginEmail(e.target.value))}} required/>
            <input type="password" placeholder="Password" className="login-form-child input-password" value={password} onChange={e => {dispatch(updateLoginPassword(e.target.value))}} required/>
            <button type="submit" className="login-form-child login-button" onClick={clickHandler}>Log In</button>
          </form>
          <a href="#">Forgotten Password ?</a>
          <div className="horizontal-line"></div>
          <NavLink to="/signup" className="new-account-button" onClick={newAccountClickHandler}>Create New Account</NavLink>
        </div>
        {
          error ? <div style={{color: "red"}}>{error}</div> : null
        }
        {
          success ? <div style={{color: "green"}}>{success}</div>:null
        }
      </div>
    </div>
  )
}

export default LoginPage;
