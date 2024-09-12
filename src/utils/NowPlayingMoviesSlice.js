import { createSlice } from "@reduxjs/toolkit";

const NowPlayingMovieSlice = createSlice({
  name : 'nowPlayingMovies',
  initialState: null,
  reducers: {
    addMovie : (state, action)=>{
      return action.payload
    }
  }
})

export const { addMovie} = NowPlayingMovieSlice.actions;

export default NowPlayingMovieSlice.reducer;