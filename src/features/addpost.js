import {createSlice} from '@reduxjs/toolkit';

const addpostSlice = createSlice({
  name: 'addpost',
  initialState:{value: ''},
  reducers: {
    updatePostInput: (state,action) => {
      state.value = action.payload;
    },
    resetPostInput: (state) => {
      state.value = ''
    }
  }
})
export const {updatePostInput,resetPostInput} = addpostSlice.actions;
export default addpostSlice.reducer; 
