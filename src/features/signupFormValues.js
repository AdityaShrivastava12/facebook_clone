import {createSlice} from '@reduxjs/toolkit';

const signupFormSlice = createSlice({
  name: "signupForm",
  initialState: {
    value: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      dob:'',
      gender: ''
    }
  },
  reducers: {
    updateFirstname: (state,action) => {
      state.value.firstname = action.payload;
    },
    updateLastname: (state,action) => {
      state.value.lastname = action.payload;
    },
    updateEmail: (state,action) => {
      state.value.email = action.payload;
    },
    updatePassword: (state,action) => {
      state.value.password = action.payload;
    },
    updateDOB: (state,action) => {
      state.value.dob = action.payload;
    },
    updateGender: (state,action) => {
      state.value.gender = action.payload;
    },
    resetForm: (state,action) => {
      state.value = action.payload;
    }
  }
})

export const {updateFirstname,updateLastname,updateEmail,updatePassword,updateDOB,updateGender,resetForm} = signupFormSlice.actions;
export default signupFormSlice.reducer;
