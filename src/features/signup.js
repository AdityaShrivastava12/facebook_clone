import React from 'react';
import {createSlice} from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: "signup",
  initialState:{
    value: {
      success: '',
      failure: [],
      alreadyExists: ''
    }
  },
  reducers: {
    success: (state,action) => {
      state.value.success = action.payload;
      state.value.failure = [];
      state.value.alreadyExists = '';
    },
    failure: (state,action) => {
      state.value.failure = action.payload;
      state.value.success = '';
      state.value.alreadyExists = '';
    },
    alreadyExists: (state,action) => {
      state.value.alreadyExists = action.payload;
      state.value.success = '';
      state.value.failure = [];
    }
  }
})

export const {success,failure,alreadyExists} = signupSlice.actions;
export default signupSlice.reducer;
