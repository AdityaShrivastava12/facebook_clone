import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: {
      error: '',
      success: ''
    }
  },
  reducers: {
    loginError: (state,action) => {
      state.value.error = action.payload;
      state.value.success = '';
    },
    loginSuccess: (state,action) => {
      state.value.error = '';
      state.value.success = action.payload;
    },
    resetLoginMessage: (state) => {
      state.value.error = '';
      state.value.success = '';
    }
  }
})
export const {loginError,loginSuccess, resetLoginMessage} = loginSlice.actions;
export default loginSlice.reducer;
