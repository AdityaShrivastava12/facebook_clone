import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import FeedPage from './components/FeedPage';
import {Routes,Route} from 'react-router-dom';
import RequiredAuth from './components/RequiredAuth.js';
import AlreadyAuth from './components/AlreadyAuth.js';
import {useDispatch,useSelector} from 'react-redux';
import React,{useEffect} from 'react';
import axios from 'axios';

function App() {
useEffect(() => {
  axios.get(`http://localhost:3001/refresh`)
    .then((response) => {
      console.log(response.data)
    })
},[])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<AlreadyAuth><LoginPage /></AlreadyAuth>} />
        <Route path="/signup" element={<AlreadyAuth><SignupPage /></AlreadyAuth>} />
        <Route path="/users/:id" element={<RequiredAuth><FeedPage /></RequiredAuth>} />
      </Routes>
    </div>
  );
}

export default App;
