import React from 'react';
import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value:{
      id: 0,
      firstname: "",
      lastname:"",
      dob: "",
      password: "",
      email: "",
      phone:"",
      age: "",
      gender: "",
      about: ""
    }
  },
  reducers:{
    loginR: (state,action) => {
      state.value = action.payload;
      localStorage.setItem('userId', action.payload.id);
    }
  }
})
export const {loginR} = userSlice.actions;
export default userSlice.reducer;
