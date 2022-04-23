import {createSlice} from '@reduxjs/toolkit';

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {value: []},
  reducers: {
    addFriend: (state,action) => {
      state.value.push(action.payload);
    },
    loadFriends: (state,action) => {
      state.value = action.payload;
    }
  }
})

export const {addFriend,loadFriends} = friendsSlice.actions;
export default friendsSlice.reducer;
