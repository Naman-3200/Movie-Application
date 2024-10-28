import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: localStorage.getItem('userEmail') || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userEmail = action.payload;
    },
    clearUser: (state) => {
      state.userEmail = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUserEmail = (state) => state.user.email;
export default userSlice.reducer;
