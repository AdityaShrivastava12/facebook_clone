import React from 'react';
import {createSlice} from '@reduxjs/toolkit';

export const feedSlice = createSlice({
  name: "feed",
  initialState: {value:[]},
  reducers:{
    getFeed: (state,action) => {
      state.value = action.payload;
    },
    updateLikes: (state,action) => {
      // action.payload = {likesArray,postId}
      let found = state.value.find(element => element.id === action.payload.postId);
      found.likes = action.payload.likesArray;
    },
    updateFeed: (state,action) => {
      state.value.push(action.payload);
    }
  }
})

export const {getFeed,updateLikes,updateFeed} = feedSlice.actions;
export default feedSlice.reducer;
