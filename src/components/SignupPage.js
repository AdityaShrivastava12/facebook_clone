import React from 'react';
import {NavLink} from 'react-router-dom';
import {addUser} from '../apiCalls';
import {useSelector,useDispatch} from 'react-redux';
import {success,failure,alreadyExists} from '../features/signup.js';
import {updateFirstname,updateLastname,updateDOB,updateEmail,updateGender,updatePassword,resetForm} from '../features/signupFormValues.js';

function SignupPage(){
  const successState = useSelector(state => state.signup.value.success);
  const failureState = useSelector(state => state.signup.value.failure);
  const alreadyExistsState = useSelector(state => state.signup.value.alreadyExists);
  const dispatch = useDispatch();
  let {firstname,lastname,email,password,dob,gender} = useSelector(state => state.signupForm.value);
  console.log()
  function clickHandler(e){
    e.preventDefault();
    addUser({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      dob: dob,
      gender: gender
    })
    .then((response) => {
      console.log(response);
      if(response.hasOwnProperty('failure')){
        dispatch(failure(response.failure));
      } else if (response.hasOwnProperty('alreadyExists')){
        dispatch(alreadyExists(response.alreadyExists));
      } else if(response.hasOwnProperty('success')){
        dispatch(success(response.success));
      }
    })
  }

  return (
    <div className="signup-page-container">
      {
        failureState.map((elem) => <div>{elem.message}</div>)
      }
        <div>{alreadyExistsState}</div>
        <div>{successState}</div>
        <img className="facebook-logo" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"/>
        <div className="signup-form-container">
          <div className="signup-heading-para">
            <h1>Sign Up</h1>
            <p>It's quick and easy</p>
          </div>
          <div className="horizontal-line"></div>
          <form className="signup-form">
            <div className="first-last-name">
               <input type="text" placeholder="First name" className="signup-input" name="firstname" value={firstname} onChange={e => {dispatch(updateFirstname(e.target.value))}} required/>
               <input type="text" placeholder="Surname" className="signup-input" value={lastname} onChange={e => {dispatch(updateLastname(e.target.value))}} required/>
            </div>
            <input type="email" placeholder="Email address" className="signup-input"  value={email} onChange={e => {dispatch(updateEmail(e.target.value))}} />
            <input type="password" placeholder="New password" className="signup-input" value={password} onChange={e => {dispatch(updatePassword(e.target.value))}} />
            <div className="dob-and-gender">
                <div className="dob">
                  <p>Date of birth</p>
                  <input type="date" className="signup-input" value={dob} onChange={e => {dispatch(updateDOB(e.target.value))}} />
                </div>
                <div className="gender">
                  <p>Gender</p>
                  <input type="text" placeholder="Gender" className="signup-input" value={gender} onChange={e => {dispatch(updateGender(e.target.value))}} />
                </div>
            </div>
          </form>
          <button className="new-account-button signup-button" onClick={clickHandler}>Sign Up</button>
          <p className="gotologin">Go to <NavLink to="/">Login</NavLink></p>
        </div>
    </div>
  )
}

export default SignupPage;
