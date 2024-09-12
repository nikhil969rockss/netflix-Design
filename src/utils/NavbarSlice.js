import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isExpanded: false,
  },
  reducers: {
    toggleNavbar: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    closeNavbar: (state) => {
      state.isExpanded = false;
    },
  },
})
export const {toggleNavbar,closeNavbar} = navbarSlice.actions

export default navbarSlice.reducer