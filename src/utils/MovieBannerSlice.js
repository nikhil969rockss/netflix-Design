import { createSlice } from "@reduxjs/toolkit";

const movieBanner = createSlice({
  name: 'movieBanner',
  initialState: {
    isOpen: false,
    movieData : null,
    movieDetailsData: null
  },
  reducers: {
    toggleOpen: (state) => {
    state.isOpen = true;
    },
    toggleClose: (state) => {
      state.isOpen = false;
    },
    addMovieData : (state ,action) => {
      state.movieData = action.payload;
    },
    addMovieDetails : (state ,action) => {
      state.movieDetailsData = action.payload;
    }

   
  },
})
export const {toggleOpen,toggleClose,addMovieData,addMovieDetails} = movieBanner.actions

export default movieBanner.reducer