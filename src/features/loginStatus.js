import {createSlice} from '@reduxjs/toolkit';

const isLoggedInSlice = createSlice({
  name: 'isLoggedIn',
  initialState: {value:false},
  reducers: {
    logIn : (state) => {
      state.value = true;
      localStorage.setItem('loginStatus',true);
    },
    logOut : (state) => {
      state.value = false;
      localStorage.setItem('loginStatus',false)
    }
  }
})

export const {logIn,logOut} = isLoggedInSlice.actions;
export default isLoggedInSlice.reducer;
