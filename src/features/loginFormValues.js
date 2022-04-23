import {createSlice} from '@reduxjs/toolkit';


const loginFormSlice = createSlice({
  name: "loginForm",
  initialState: {value: {email: '', password: ''}},
  reducers: {
    updateLoginEmail: (state,action) => {
      state.value.email = action.payload;
    },
    updateLoginPassword: (state,action) => {
      state.value.password = action.payload;
    },
    resetLoginForm: (state) => {
      state.value.email = '';
      state.value.password = '';
    }
  }
})

export const {updateLoginEmail,updateLoginPassword, resetLoginForm} = loginFormSlice.actions;
export default loginFormSlice.reducer;
