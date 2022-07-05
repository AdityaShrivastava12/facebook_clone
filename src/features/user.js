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
      email: "",
      phone:"",
      age: "",
      gender: "",
      about: "",
      accessToken: ''
    }
  },
  reducers:{
    loginR: (state,action) => {
      state.value = action.payload;
    }
  }
})
export const {loginR} = userSlice.actions;
export default userSlice.reducer;
