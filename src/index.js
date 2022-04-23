import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userReducer from './features/user';
import feedReducer from './features/feed';
import signupReducer from './features/signup';
import signupFormReducer from './features/signupFormValues.js';
import loginFormReducer from './features/loginFormValues.js';
import loginReducer from './features/login.js';
import loginStatusReducer from './features/loginStatus.js';
import friendsReducer from './features/friends.js';
import commentsReducer from './features/comments.js';
import postFormReducer from './features/addpost.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    signup: signupReducer,
    signupForm: signupFormReducer,
    loginForm: loginFormReducer,
    login: loginReducer,
    loginStatus: loginStatusReducer,
    friends: friendsReducer,
    comments: commentsReducer,
    addPostInput: postFormReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
       <App />
    </Provider>
  </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
