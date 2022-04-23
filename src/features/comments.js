import {createSlice} from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: "comments",
  initialState: {value:[]},
  reducers: {
    getComments: (state,action) => {
      state.value = action.payload;
    }
  }
})

export const {getComments} = commentsSlice.actions;
export default commentsSlice.reducer;
