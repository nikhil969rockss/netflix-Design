import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    clearUser: (state) => {
      return null;
    },
  },
});
export const { addUser, clearUser } = UserSlice.actions;

export default UserSlice.reducer;
